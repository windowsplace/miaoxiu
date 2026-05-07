import { useState } from 'react'
import { ShoppingCart, Heart, Star, Filter, Grid, List } from 'lucide-react'

const Products = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [sortBy, setSortBy] = useState('popular')

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'clothing', name: '服饰' },
    { id: 'accessories', name: '配饰' },
    { id: 'home', name: '家居' },
    { id: 'gift', name: '礼品' },
  ]

  const products = [
    { id: 1, name: '苗绣手工披肩', category: 'accessories', price: 599, rating: 4.9, sales: 328, image: 'miao%20embroidery%20handmade%20shawl%20traditional%20chinese%20craft%20elegant' },
    { id: 2, name: '苗族银饰套装', category: 'accessories', price: 1299, rating: 4.8, sales: 156, image: 'miao%20silver%20jewelry%20set%20traditional%20chinese%20ethnic%20accessories' },
    { id: 3, name: '苗绣旗袍', category: 'clothing', price: 1999, rating: 5.0, sales: 89, image: 'miao%20embroidery%20qipao%20traditional%20chinese%20dress%20elegant' },
    { id: 4, name: '苗绣抱枕', category: 'home', price: 299, rating: 4.7, sales: 512, image: 'miao%20embroidery%20pillow%20home%20decor%20traditional%20craft' },
    { id: 5, name: '苗绣手提包', category: 'accessories', price: 459, rating: 4.8, sales: 234, image: 'miao%20embroidery%20handbag%20traditional%20chinese%20craft%20bag' },
    { id: 6, name: '苗绣围巾', category: 'accessories', price: 399, rating: 4.6, sales: 456, image: 'miao%20embroidery%20scarf%20traditional%20chinese%20craft%20warm' },
    { id: 7, name: '苗绣挂画', category: 'home', price: 899, rating: 4.9, sales: 78, image: 'miao%20embroidery%20wall%20art%20traditional%20chinese%20painting' },
    { id: 8, name: '苗绣礼品盒', category: 'gift', price: 699, rating: 4.8, sales: 167, image: 'miao%20embroidery%20gift%20box%20traditional%20chinese%20craft%20packaging' },
  ]

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">产品展示</h1>
            <p className="text-xl text-white/80">精选苗绣工艺，传承民族文化</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="popular">按销量</option>
                  <option value="price-low">价格从低到高</option>
                  <option value="price-high">价格从高到低</option>
                  <option value="rating">按评分</option>
                </select>
              </div>
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
            {filteredProducts.map((product) => (
              <div key={product.id} className={`bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group ${viewMode === 'list' ? 'flex' : ''}`}>
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-square'}`}>
                  <img
                    src={`https://neeko-copilot.bytedance.net/api/text2image?prompt=${product.image}&image_size=square`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <button className="bg-white text-primary-600 w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors mx-2">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors mx-2">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-400">|</span>
                    <span className="text-sm text-gray-400">{product.sales}已售</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-accent-600">¥{product.price}</span>
                    <button className="text-primary-600 text-sm font-medium hover:text-primary-700">
                      查看详情
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-xl">暂无该分类产品</div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">定制服务</h3>
            <p className="text-gray-600 mb-6">我们提供个性化定制服务，根据您的需求定制专属苗绣作品</p>
            <button onClick={() => onNavigate('contact')} className="bg-primary-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors">
              联系定制
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
