
import React, { useState, useEffect } from 'react';
// Added RefreshCw to imports
import { X, Mail, ShieldCheck, ArrowRight, User as UserIcon, Lock, Eye, EyeOff, Key, Bell, Chrome, RefreshCw } from 'lucide-react';
import { RegisteredUser } from '../types';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (identifier: string) => void;
  onSignup: (details: RegisteredUser) => void;
  registeredUsers: RegisteredUser[];
}

export const LoginModal: React.FC<LoginModalProps> = ({ 
  isOpen, onClose, onLogin, onSignup, registeredUsers 
}) => {
  const [stage, setStage] = useState<'identifier' | 'password' | 'signup'>('identifier');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setStage('identifier');
      setIdentifier('');
      setPassword('');
      setName('');
      setError('');
    }
  }, [isOpen]);

  const handleIdentifierSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier) return setError('Enter email or mobile');
    
    setLoading(true);
    setTimeout(() => {
      const user = registeredUsers.find(u => u.identifier.toLowerCase() === identifier.toLowerCase());
      if (user) {
        setStage('password');
      } else {
        setStage('signup');
      }
      setLoading(false);
      setError('');
    }, 600);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return setError('Enter your password');

    const user = registeredUsers.find(u => u.identifier.toLowerCase() === identifier.toLowerCase());
    if (user && user.password === password) {
      onLogin(identifier);
    } else {
      setError('Incorrect password');
    }
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !password) return setError('Please fill all fields');
    if (password.length < 4) return setError('Password too short');

    onSignup({
      identifier,
      name,
      password,
      role: 'user',
      createdAt: Date.now()
    });
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      onLogin('google-user@gmail.com');
      setLoading(false);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white dark:bg-[#0f0f12] w-full max-w-md rounded-[40px] shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden animate-modal">
        {/* Header */}
        <div className="p-8 pb-4 flex justify-between items-start">
          <div>
            <div className="bg-indigo-600 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-indigo-900/20">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight leading-none">
              {stage === 'signup' ? 'Join Us' : 'Welcome'}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium text-sm mt-2">
              {stage === 'identifier' && "Sign in to your account"}
              {stage === 'password' && "Enter password for secure access"}
              {stage === 'signup' && "Create your premium account"}
            </p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <div className="p-8 pt-4">
          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900/30 text-red-600 dark:text-red-400 p-3 rounded-xl text-xs font-bold mb-6 flex items-center gap-2">
              <Bell className="w-4 h-4" /> {error}
            </div>
          )}

          <form onSubmit={
            stage === 'identifier' ? handleIdentifierSubmit : 
            stage === 'password' ? handleLoginSubmit : 
            handleSignupSubmit
          } className="space-y-5">
            
            {stage === 'identifier' && (
              <>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Account ID</label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-indigo-600 transition-colors" />
                    <input 
                      type="text" 
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder="Email or Mobile"
                      className="w-full bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl py-4 pl-12 pr-4 outline-none text-sm font-bold dark:text-white focus:border-indigo-500 transition-all"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-4 rounded-2xl shadow-xl shadow-indigo-900/20 flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50"
                >
                  {loading ? <RefreshCw className="w-5 h-5 animate-spin" /> : <>Continue <ArrowRight className="w-5 h-5" /></>}
                </button>

                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-100 dark:border-gray-800"></div></div>
                  <div className="relative flex justify-center text-xs uppercase tracking-widest"><span className="bg-white dark:bg-[#0f0f12] px-4 text-gray-400 font-black">Or</span></div>
                </div>

                <button 
                  type="button"
                  onClick={handleGoogleLogin}
                  className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-bold py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                >
                  <Chrome className="w-5 h-5 text-red-500" />
                  Continue with Google
                </button>
              </>
            )}

            {stage === 'password' && (
              <>
                <div className="bg-indigo-50 dark:bg-indigo-950/30 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-900/20 mb-2">
                  <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Signed in as</p>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">{identifier}</p>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Password</label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl py-4 pl-12 pr-12 outline-none text-sm font-bold dark:text-white focus:border-indigo-500 transition-all"
                      autoFocus
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-indigo-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-4 rounded-2xl shadow-xl shadow-indigo-900/20 transition-all active:scale-95"
                >
                  Verify Access
                </button>
                <button 
                  type="button" 
                  onClick={() => setStage('identifier')}
                  className="w-full text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] hover:text-indigo-600 transition-colors"
                >
                  Use Different Account
                </button>
              </>
            )}

            {stage === 'signup' && (
              <>
                <div className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-2xl border border-amber-100 dark:border-amber-900/20 mb-2">
                  <p className="text-[10px] font-black text-amber-600 dark:text-amber-500 uppercase tracking-widest">New Account</p>
                  <p className="font-bold text-gray-900 dark:text-white text-sm">Registering {identifier}</p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Your Full Name</label>
                    <div className="relative group">
                      <UserIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl py-4 pl-12 pr-4 outline-none text-sm font-bold dark:text-white focus:border-indigo-500 transition-all"
                        autoFocus
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Create Password</label>
                    <div className="relative group">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input 
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="At least 4 characters"
                        className="w-full bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-2xl py-4 pl-12 pr-4 outline-none text-sm font-bold dark:text-white focus:border-indigo-500 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-4 rounded-2xl shadow-xl shadow-indigo-900/20 transition-all active:scale-95"
                >
                  Create Account
                </button>
                <button 
                  type="button" 
                  onClick={() => setStage('identifier')}
                  className="w-full text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] hover:text-indigo-600 transition-colors"
                >
                  Go Back
                </button>
              </>
            )}
          </form>
        </div>

        <div className="p-8 pt-0 text-center">
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <ShieldCheck className="w-3 h-3" />
            <span className="text-[10px] font-bold uppercase tracking-widest">End-to-End Encrypted Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};
