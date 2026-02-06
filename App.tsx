import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { SegmentCard } from './components/SegmentCard';
import { InfoBanner } from './components/InfoBanner';
import { OrderSteps } from './components/OrderSteps';
import { CheckoutForm } from './components/CheckoutForm';
import { PaymentPage } from './components/PaymentPage';
import { SuccessPage } from './components/SuccessPage';
import { AdminDashboard } from './components/AdminDashboard';
import { LoginModal } from './components/LoginModal';
import { ProductPage } from './components/ProductPage';
import { NotificationToast, Notification as ToastNotification } from './components/NotificationToast';
import { Footer } from './components/Footer';
import { OfferSection } from './components/OfferSection';
import { SplashScreen } from './components/SplashScreen';
import { CustomFramingContact } from './components/CustomFramingContact';
import { ImagePreviewModal } from './components/ImagePreviewModal';
import { SpecialEditionComingSoon } from './components/SpecialEditionComingSoon';
import { PremiumSectionPopup } from './components/PremiumSectionPopup';
import { FilterSidebar } from './components/FilterSidebar';
import { BottomNav } from './components/BottomNav';
import { OrdersModal } from './components/OrdersModal';
import { PRODUCTS, SEGMENTS_INFO, CONTACT_WHATSAPP, UPI_QR_URL } from './constants';
import { Product, CustomerDetails, CheckoutStep, Order, User, RegisteredUser, ProductSegment } from './types';
import { ChevronLeft, RefreshCw, RefreshCcw, Filter, X } from 'lucide-react';

const App: React.FC = () => {
  const [isInitializing, setIsInitializing] = useState(true);
  const [currentStep, setCurrentStep] = useState<CheckoutStep>(CheckoutStep.CATALOG);
  const [activeSegment, setActiveSegment] = useState<ProductSegment | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails | null>(null);
  const [order, setOrder] = useState<Order | null>(null);
  const [isAdminView, setIsAdminView] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isPremiumPopupOpen, setIsPremiumPopupOpen] = useState(false);
  const [isOrdersModalOpen, setIsOrdersModalOpen] = useState(false);
  const [syncStatus, setSyncStatus] = useState<'idle' | 'syncing' | 'pushing'>('idle');
  const [notifications, setNotifications] = useState<ToastNotification[]>([]);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  
  // Filter States
  const [priceRange, setPriceRange] = useState<[number, number] | null>(null);
  const [minRating, setMinRating] = useState<number | null>(null);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const [customQr, setCustomQr] = useState<string>(() => {
    return localStorage.getItem('fm_custom_qr') || UPI_QR_URL;
  });

  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('fm_user');
    try {
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [registry, setRegistry] = useState<RegisteredUser[]>(() => {
    const saved = localStorage.getItem('fm_registered_users');
    try {
      const users = saved ? JSON.parse(saved) : [];
      if (users.length === 0) {
        return [{
          identifier: 'yashharad19@gmail.com',
          name: 'Admin Yash',
          password: 'admin',
          role: 'admin',
          createdAt: Date.now()
        }];
      }
      return users;
    } catch {
      return [];
    }
  });
  
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('fm_orders');
    try {
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark' || !savedTheme) {
        document.documentElement.classList.add('dark');
        return 'dark';
      }
    }
    document.documentElement.classList.remove('dark');
    return 'light';
  });

  // Internal Back Logic for Sync with Browser History
  const handleStepBack = useCallback(() => {
    if (isOrdersModalOpen) {
      setIsOrdersModalOpen(false);
    } else if (isAdminView) {
      setIsAdminView(false);
    } else if (currentStep === CheckoutStep.PAYMENT) {
      setCurrentStep(CheckoutStep.DETAILS);
    } else if (currentStep === CheckoutStep.DETAILS) {
      setCurrentStep(CheckoutStep.PRODUCT_PAGE);
    } else if (currentStep === CheckoutStep.PRODUCT_PAGE) {
      setCurrentStep(CheckoutStep.CATALOG);
    } else if (activeSegment) {
      setActiveSegment(null);
      setPriceRange(null);
      setMinRating(null);
    }
  }, [isAdminView, currentStep, activeSegment, isOrdersModalOpen]);

  // Listen to mobile hardware/browser back button
  useEffect(() => {
    const onPopState = (e: PopStateEvent) => {
      handleStepBack();
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [handleStepBack]);

  useEffect(() => {
    localStorage.setItem('fm_registered_users', JSON.stringify(registry));
  }, [registry]);

  useEffect(() => {
    localStorage.setItem('fm_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleUpdateQr = (base64: string) => {
    setCustomQr(base64);
    localStorage.setItem('fm_custom_qr', base64);
    setNotifications(prev => [{
      id: 'qr-' + Date.now(),
      type: 'sms',
      title: 'Store Update',
      message: 'Payment QR Code updated successfully across the store.',
      timestamp: Date.now()
    }, ...prev]);
  };

  const syncAccountData = async () => {
    setSyncStatus('syncing');
    await new Promise(r => setTimeout(r, 1200));
    const savedOrders = localStorage.getItem('fm_orders');
    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
    setSyncStatus('idle');
  };

  const handleLoginComplete = async (identifier: string) => {
    const idLower = identifier.toLowerCase();
    const isAdmin = idLower === 'yashharad19@gmail.com';
    const registered = registry.find(r => r.identifier.toLowerCase() === idLower);
    
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      identifier: idLower,
      email: idLower.includes('@') ? idLower : `${idLower}@fmobile.com`,
      name: registered ? registered.name : (isAdmin ? 'Admin Yash' : 'Premium Customer'),
      role: isAdmin ? 'admin' : 'user'
    };

    setUser(newUser);
    localStorage.setItem('fm_user', JSON.stringify(newUser));
    setIsLoginModalOpen(false);
    
    if (isAdmin) {
      await syncAccountData();
    }
  };

  const handlePaymentConfirm = (txnId: string, screenshot?: File) => {
    const newOrderId = 'FM' + Math.random().toString(36).substring(2, 8).toUpperCase();
    if (screenshot) {
      const reader = new FileReader();
      reader.onloadend = () => completeOrder(newOrderId, txnId, reader.result as string);
      reader.readAsDataURL(screenshot);
    } else {
      completeOrder(newOrderId, txnId);
    }
  };

  const completeOrder = async (newOrderId: string, txnId: string, base64Screenshot?: string) => {
    setSyncStatus('pushing');
    
    const newOrder: Order = {
      orderId: newOrderId,
      userId: user?.id || 'guest',
      productId: selectedProduct!.id,
      productName: selectedProduct!.name,
      price: selectedProduct!.price,
      customerDetails: customerDetails!,
      transactionId: txnId,
      screenshot: base64Screenshot,
      status: 'paid',
      timestamp: Date.now(),
      isCloudOrder: false,
      locationNode: 'LOCAL-NODE-' + (customerDetails?.state.substring(0,2).toUpperCase() || 'IN')
    };

    await new Promise(r => setTimeout(r, 1000));
    setOrders(prev => [newOrder, ...prev]);
    setOrder(newOrder);
    setSyncStatus('idle');
    setCurrentStep(CheckoutStep.SUCCESS);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const handleSegmentClick = (id: ProductSegment) => {
    window.history.pushState(null, '');
    setActiveSegment(id);
    if (id === '3d-car-premium') {
      setIsPremiumPopupOpen(true);
    }
    window.scrollTo(0,0);
  };

  const filteredProducts = PRODUCTS.filter(p => {
    if (activeSegment && p.segment !== activeSegment) return false;
    if (priceRange && (p.price < priceRange[0] || p.price > priceRange[1])) return false;
    if (minRating) {
      const avgRating = p.reviews.reduce((acc, r) => acc + r.rating, 0) / p.reviews.length;
      if (avgRating < minRating) return false;
    }
    return true;
  });

  return (
    <div className={`min-h-screen flex flex-col bg-gray-50 dark:bg-transparent theme-transition relative ${isInitializing ? 'overflow-hidden max-h-screen' : ''}`}>
      {isInitializing && <SplashScreen onComplete={() => setIsInitializing(false)} />}

      {syncStatus !== 'idle' && (
        <div className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-xl flex items-center justify-center p-6">
          <div className="bg-white dark:bg-[#111114] p-10 rounded-[40px] shadow-2xl flex flex-col items-center gap-6 animate-modal border border-gray-100 dark:border-gray-800 text-center max-w-sm">
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-500/20 rounded-full blur-2xl animate-pulse" />
              {syncStatus === 'syncing' ? <RefreshCw className="w-16 h-16 text-indigo-600 animate-spin" /> : <RefreshCcw className="w-16 h-16 text-teal-500 animate-spin" />}
            </div>
            <div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">
                {syncStatus === 'syncing' ? 'Syncing Node' : 'Recording Data'}
              </h3>
            </div>
          </div>
        </div>
      )}

      <Navbar 
        showBack={isAdminView || currentStep !== CheckoutStep.CATALOG || !!activeSegment} 
        onBack={() => window.history.back()}
        theme={theme}
        onToggleTheme={toggleTheme}
        user={user}
        onLogin={() => setIsLoginModalOpen(true)}
        onLogout={() => { setUser(null); setIsAdminView(false); localStorage.removeItem('fm_user'); setCurrentStep(CheckoutStep.CATALOG); }}
        isAdminView={isAdminView}
        onToggleAdminView={() => {
          if (!isAdminView) window.history.pushState(null, '');
          setIsAdminView(!isAdminView);
        }}
      />
      
      <main className={`flex-1 relative z-10 transition-all duration-700 ${isInitializing ? 'blur-xl opacity-0 scale-95' : 'blur-0 opacity-100 scale-100'} pb-24 md:pb-0`}>
        {isAdminView ? (
          <AdminDashboard 
            orders={orders} qrCodeUrl={customQr} onUpdateQr={handleUpdateQr} onSyncGlobal={syncAccountData}
            onExport={() => {}} onImport={() => {}} onClearAll={() => setOrders([])}
          />
        ) : (
          <>
            {currentStep === CheckoutStep.CATALOG && (
              <div className="max-w-screen-2xl mx-auto px-4 py-12">
                {!activeSegment ? (
                  <>
                    <div className="mb-16 text-center">
                      <h1 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 tracking-tight italic">
                        LUXURY <span className="text-gold">COLLECTIONS</span>
                      </h1>
                      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg font-medium">
                        Select a category to explore our artisanal 3D framing solutions.
                      </p>
                    </div>

                    <OfferSection id="catalog-offers" />
                    
                    <div id="segment-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                      {SEGMENTS_INFO.map(seg => (
                        <SegmentCard 
                          key={seg.id}
                          title={seg.title}
                          subtitle={seg.subtitle}
                          image={seg.image}
                          onClick={() => handleSegmentClick(seg.id)}
                        />
                      ))}
                    </div>

                    <CustomFramingContact />
                  </>
                ) : activeSegment === 'special' ? (
                  <SpecialEditionComingSoon onBack={() => window.history.back()} />
                ) : (
                  <div className="animate-modal">
                    {/* Header Section */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                      <div className="flex items-center gap-4">
                        <button onClick={() => window.history.back()} className="p-3 bg-gray-100 dark:bg-gray-800 rounded-2xl hover:bg-amber-600 hover:text-white transition-all">
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <div>
                          <h2 className="text-3xl font-black text-gray-900 dark:text-white leading-none tracking-tighter italic">
                              {SEGMENTS_INFO.find(s => s.id === activeSegment)?.title}
                          </h2>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">
                            {filteredProducts.length} Results Found
                          </p>
                        </div>
                      </div>

                      {/* Mobile Filter Toggle */}
                      <button 
                        onClick={() => setIsMobileFiltersOpen(true)}
                        className="md:hidden flex items-center justify-center gap-2 bg-white dark:bg-[#111114] border border-gray-100 dark:border-white/5 p-4 rounded-2xl shadow-sm text-xs font-black uppercase tracking-widest text-gray-600 dark:text-gray-400"
                      >
                        <Filter className="w-4 h-4" /> Filters
                        {(priceRange || minRating) && <div className="w-2 h-2 rounded-full bg-amber-500" />}
                      </button>
                    </div>

                    <div className="flex gap-10">
                      {/* Desktop Sidebar */}
                      <div className="hidden md:block w-72 flex-shrink-0 sticky top-32 h-[calc(100vh-160px)] rounded-[32px] overflow-hidden border border-gray-100 dark:border-white/5 shadow-2xl">
                        <FilterSidebar 
                          activeSegment={activeSegment}
                          onSegmentChange={handleSegmentClick}
                          priceRange={priceRange}
                          onPriceChange={setPriceRange}
                          minRating={minRating}
                          onRatingChange={setMinRating}
                        />
                      </div>

                      {/* Product Grid */}
                      <div className="flex-1">
                        {filteredProducts.length === 0 ? (
                          <div className="bg-white dark:bg-[#111114] rounded-[48px] p-20 text-center border border-dashed border-gray-200 dark:border-white/5">
                            <Filter className="w-16 h-16 text-gray-200 dark:text-gray-800 mx-auto mb-6" />
                            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2 italic">No Masterpieces Found</h3>
                            <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-xs mx-auto">Try adjusting your filters to find your perfect automotive frame.</p>
                            <button 
                              onClick={() => { setPriceRange(null); setMinRating(null); }}
                              className="bg-amber-600 text-white font-black px-10 py-4 rounded-2xl text-xs uppercase tracking-widest shadow-xl shadow-amber-900/20"
                            >
                              Reset All Filters
                            </button>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                            {filteredProducts.map(p => (
                              <ProductCard 
                                key={p.id} 
                                product={p} 
                                onPreview={(url) => setPreviewImageUrl(url)}
                                onViewDetails={(prod) => { 
                                  window.history.pushState(null, '');
                                  setSelectedProduct(prod); 
                                  setCurrentStep(CheckoutStep.PRODUCT_PAGE);
                                  window.scrollTo(0,0);
                                }} 
                              />
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    <InfoBanner />
                    <CustomFramingContact />
                  </div>
                )}
              </div>
            )}

            {currentStep === CheckoutStep.PRODUCT_PAGE && selectedProduct && (
              <ProductPage 
                product={selectedProduct} 
                onPreview={(url) => setPreviewImageUrl(url)}
                onBack={() => window.history.back()}
                onBuyNow={() => {
                   if(!user) setIsLoginModalOpen(true);
                   else {
                     window.history.pushState(null, '');
                     setCurrentStep(CheckoutStep.DETAILS);
                   }
                   window.scrollTo(0,0);
                }}
              />
            )}

            {currentStep === CheckoutStep.DETAILS && selectedProduct && (
              <div className="py-12">
                <OrderSteps currentStep={0} />
                <CheckoutForm product={selectedProduct} onSubmit={(d) => { 
                  window.history.pushState(null, '');
                  setCustomerDetails(d); 
                  setCurrentStep(CheckoutStep.PAYMENT); 
                }} />
              </div>
            )}
            
            {currentStep === CheckoutStep.PAYMENT && selectedProduct && customerDetails && (
              <div className="py-12">
                <OrderSteps currentStep={1} />
                <PaymentPage product={selectedProduct} details={customerDetails} qrCodeUrl={customQr} onPaid={handlePaymentConfirm} />
              </div>
            )}
            
            {currentStep === CheckoutStep.SUCCESS && order && (
              <SuccessPage order={order} user={user} onHome={() => { 
                setActiveSegment(null); 
                setCurrentStep(CheckoutStep.CATALOG); 
              }} />
            )}
          </>
        )}
      </main>

      {/* Mobile Nav Bar */}
      {!isAdminView && (
        <BottomNav 
          currentStep={currentStep}
          activeSegment={activeSegment}
          isOrdersOpen={isOrdersModalOpen}
          onHome={() => {
            setCurrentStep(CheckoutStep.CATALOG);
            setActiveSegment(null);
            setIsOrdersModalOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onCategories={() => {
            setCurrentStep(CheckoutStep.CATALOG);
            setActiveSegment(null);
            setIsOrdersModalOpen(false);
            setTimeout(() => {
              document.getElementById('segment-grid')?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          onCart={() => setIsOrdersModalOpen(!isOrdersModalOpen)}
          onAccount={() => {
            if (user) {
              // Show account info or just open orders
              setIsOrdersModalOpen(true);
            } else {
              setIsLoginModalOpen(true);
            }
          }}
        />
      )}

      {/* Mobile Filters Modal */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-[250] bg-black/60 backdrop-blur-md flex justify-end">
          <div className="w-[85%] max-w-sm h-full animate-modal">
            <FilterSidebar 
              activeSegment={activeSegment}
              onSegmentChange={handleSegmentClick}
              priceRange={priceRange}
              onPriceChange={setPriceRange}
              minRating={minRating}
              onRatingChange={setMinRating}
              isMobile={true}
              onClose={() => setIsMobileFiltersOpen(false)}
            />
          </div>
        </div>
      )}

      {!isAdminView && (currentStep === CheckoutStep.CATALOG || currentStep === CheckoutStep.PRODUCT_PAGE) && <Footer />}
      
      <NotificationToast notifications={notifications} onRemove={id => setNotifications(prev => prev.filter(n => n.id !== id))} />
      
      <ImagePreviewModal 
        imageUrl={previewImageUrl} 
        onClose={() => setPreviewImageUrl(null)} 
        productName={selectedProduct?.name} 
      />

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
        onLogin={handleLoginComplete} 
        onSignup={(d) => { setRegistry(prev => [...prev, d]); handleLoginComplete(d.identifier); }} 
        registeredUsers={registry} 
      />

      <PremiumSectionPopup 
        isOpen={isPremiumPopupOpen} 
        onClose={() => setIsPremiumPopupOpen(false)} 
      />

      <OrdersModal 
        isOpen={isOrdersModalOpen}
        onClose={() => setIsOrdersModalOpen(false)}
        orders={orders.filter(o => o.userId === (user?.id || 'guest'))}
      />
    </div>
  );
};

export default App;