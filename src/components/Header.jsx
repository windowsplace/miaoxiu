import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Header = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: '首页' },
    { id: 'about', label: '关于我们' },
    { id: 'products', label: '产品展示' },
    { id: 'culture', label: '文化传承' },
    { id: 'news', label: '新闻动态' },
    { id: 'contact', label: '联系我们' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-divider/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 bg-meta-blue rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-dark-charcoal">苗绣竹韵</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-all duration-200 ${
                  currentPage === item.id
                    ? 'text-meta-blue font-semibold'
                    : 'text-secondary-text hover:text-dark-charcoal'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <button className="btn-primary">
              立即咨询
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-soft-gray transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-divider">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  currentPage === item.id
                    ? 'bg-baby-blue text-meta-blue font-semibold'
                    : 'text-secondary-text hover:bg-soft-gray'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2 border-t border-divider">
              <button className="btn-primary w-full mt-2">
                立即咨询
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
