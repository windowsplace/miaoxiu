import { useState } from 'react'
import { Calendar, ArrowRight, Tag, Share2, Eye } from 'lucide-react'

const News = ({ onNavigate }) => {
  const [activeTag, setActiveTag] = useState('all')

  const tags = [
    { id: 'all', name: '全部' },
    { id: 'company', name: '公司动态' },
    { id: 'culture', name: '文化传承' },
    { id: 'rural', name: '乡村振兴' },
    { id: 'media', name: '媒体报道' },
  ]

  const news = [
    {
      id: 1,
      title: '苗绣竹韵参加2024中国非遗博览会',
      excerpt: '公司携百余件苗绣精品亮相博览会，受到各界人士高度评价',
      date: '2024-01-15',
      tag: 'company',
      image: 'miao%20embroidery%20exhibition%20booth%20chinese%20cultural%20fair',
      views: 2345,
    },
    {
      id: 2,
      title: '非遗传承人培训计划启动',
      excerpt: '首期培训班开班，培养新一代苗绣技艺传承人',
      date: '2024-01-10',
      tag: 'culture',
      image: 'miao%20embroidery%20training%20class%20traditional%20craft%20education',
      views: 1890,
    },
    {
      id: 3,
      title: '乡村振兴项目获省级表彰',
      excerpt: '公司乡村振兴工作成效显著，荣获省级示范企业称号',
      date: '2024-01-05',
      tag: 'rural',
      image: 'rural%20development%20award%20ceremony%20chinese%20countryside',
      views: 3456,
    },
    {
      id: 4,
      title: '央视《非遗里的中国》专题报道',
      excerpt: '央视摄制组深入苗寨，记录苗绣技艺传承故事',
      date: '2023-12-28',
      tag: 'media',
      image: 'cctv%20filming%20miao%20embroidery%20documentary%20tv%20production',
      views: 5678,
    },
    {
      id: 5,
      title: '苗绣新品发布会成功举办',
      excerpt: '推出2024春夏系列新品，融合传统与现代设计',
      date: '2023-12-20',
      tag: 'company',
      image: 'miao%20embroidery%20fashion%20show%20new%20collection%20launch',
      views: 4521,
    },
    {
      id: 6,
      title: '苗绣技艺进校园活动',
      excerpt: '走进当地中小学，让孩子们了解非遗文化',
      date: '2023-12-15',
      tag: 'culture',
      image: 'miao%20embroidery%20school%20workshop%20children%20learning',
      views: 2134,
    },
  ]

  const filteredNews = activeTag === 'all' 
    ? news 
    : news.filter(n => n.tag === activeTag)

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">新闻动态</h1>
            <p className="text-xl text-white/80">了解苗绣竹韵的最新动态和行业资讯</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setActiveTag(tag.id)}
                className={`inline-flex items-center space-x-1 px-4 py-2 rounded-full font-medium transition-colors ${
                  activeTag === tag.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Tag className="w-4 h-4" />
                <span>{tag.name}</span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.map((item) => (
              <div key={item.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={`https://neeko-copilot.bytedance.net/api/text2image?prompt=${item.image}&image_size=landscape_4_3`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm">
                      {tags.find(t => t.id === item.tag)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-gray-400 text-sm mb-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{item.views}</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.excerpt}</p>
                  <button className="flex items-center space-x-2 text-primary-600 font-medium hover:text-primary-700 transition-colors">
                    <span>阅读全文</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-xl">暂无相关新闻</div>
            </div>
          )}

          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                上一页
              </button>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg">1</button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">2</button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">3</button>
              <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                下一页
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">订阅我们的新闻资讯</h3>
                <p className="text-gray-600">获取最新动态和独家优惠信息</p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="输入您的邮箱地址"
                  className="flex-1 md:w-64 px-4 py-3 border border-gray-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button className="bg-primary-600 text-white px-6 py-3 rounded-r-lg hover:bg-primary-700 transition-colors">
                  订阅
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News
