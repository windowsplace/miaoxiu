import { ArrowRight, Award, Users, Heart, TrendingUp } from 'lucide-react'

const Home = ({ onNavigate }) => {
  const stats = [
    { icon: Users, value: '500+', label: '合作绣娘' },
    { icon: Award, value: '20+', label: '非遗传承人' },
    { icon: Heart, value: '10万+', label: '产品销量' },
    { icon: TrendingUp, value: '5000万', label: '年产值' },
  ]

  const features = [
    {
      title: '非遗传承',
      description: '传承千年苗绣技艺，守护民族文化瑰宝',
      color: 'bg-meta-blue/10 text-meta-blue',
    },
    {
      title: '乡村振兴',
      description: '带动乡村经济发展，助力共同富裕',
      color: 'bg-cherry/10 text-cherry',
    },
    {
      title: '匠心工艺',
      description: '每一件作品都凝聚着匠人的心血与智慧',
      color: 'bg-grape/10 text-grape',
    },
  ]

  return (
    <div className="pt-16">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-meta"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ backgroundImage: `url('https://neeko-copilot.bytedance.net/api/text2image?prompt=traditional%20Chinese%20miao%20embroidery%20art%20with%20bamboo%20elements%20cultural%20heritage&image_size=landscape_16_9')` }}>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-pill px-4 py-2 mb-6">
            <span className="text-white/90 text-sm">传承苗族文化 · 助力乡村振兴</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            苗绣竹韵
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            以传统手工艺为纽带，连接古老文明与现代生活，让非遗文化焕发新生
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('products')} className="btn-primary inline-flex items-center justify-center space-x-2">
              <span>探索产品</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => onNavigate('about')} className="btn-secondary">
              了解更多
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-soft-gray rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-meta-blue" />
                </div>
                <div className="text-3xl font-bold text-dark-charcoal">{stat.value}</div>
                <div className="text-secondary-text mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-dark-charcoal mb-4">我们的理念</h2>
            <p className="text-slate-gray max-w-2xl mx-auto">传承文化，创造价值，让每一针每一线都诉说着民族的故事</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-feature elevation-1 hover:elevation-2">
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  {index === 0 && <Award className="w-7 h-7" />}
                  {index === 1 && <Users className="w-7 h-7" />}
                  {index === 2 && <Heart className="w-7 h-7" />}
                </div>
                <h3 className="text-xl font-semibold text-dark-charcoal mb-3">{feature.title}</h3>
                <p className="text-slate-gray">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-dark-charcoal mb-4">精选产品</h2>
            <p className="text-slate-gray">匠心打造，传承经典</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((product) => (
              <div key={product} className="card-standard hover-lift group overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={`https://neeko-copilot.bytedance.net/api/text2image?prompt=beautiful%20miao%20embroidery%20product%20traditional%20Chinese%20craft%20elegant%20design&image_size=square`}
                    alt={`产品 ${product}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-dark-charcoal mb-2">苗绣精品 {product}</h3>
                  <p className="text-slate-gray text-sm mb-4">传统工艺，现代设计</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-cherry">¥299</span>
                    <button className="btn-ghost text-meta-blue font-medium">
                      查看详情
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => onNavigate('products')} className="btn-primary inline-flex items-center space-x-2">
              <span>查看全部产品</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-meta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-white mb-4">加入我们，传承非遗</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            无论您是想学习苗绣技艺，还是寻找合作机会，我们都期待与您携手
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => onNavigate('contact')} className="bg-white text-meta-blue px-8 py-3 rounded-pill font-semibold hover:bg-gray-100 transition-colors">
              联系我们
            </button>
            <button onClick={() => onNavigate('culture')} className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-pill font-semibold hover:bg-white/10 transition-colors">
              了解文化
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
