import { History, Palette, BookOpen, Video, Play } from 'lucide-react'

const Culture = ({ onNavigate }) => {
  const techniques = [
    { name: '平绣', description: '最基础的刺绣技法，线条流畅，色彩鲜艳' },
    { name: '辫绣', description: '用彩色丝线编织成辫子状图案，立体感强' },
    { name: '打籽绣', description: '用丝线打成小籽，点缀出精美图案' },
    { name: '破线绣', description: '将丝线劈成细缕，表现细腻纹理' },
    { name: '挑花', description: '在布上挑纱而成，图案对称精美' },
    { name: '锁边绣', description: '用于衣物边缘装饰，结实美观' },
  ]

  const patterns = [
    { name: '蝴蝶纹', meaning: '象征爱情与自由' },
    { name: '龙纹', meaning: '象征吉祥与力量' },
    { name: '凤纹', meaning: '象征美好与幸福' },
    { name: '鱼纹', meaning: '象征年年有余' },
    { name: '鸟纹', meaning: '象征吉祥如意' },
    { name: '花草纹', meaning: '象征自然与生命' },
  ]

  const videos = [
    { title: '苗绣技艺入门', duration: '15:30' },
    { title: '传统纹样解读', duration: '20:15' },
    { title: '非遗传承人访谈', duration: '25:00' },
  ]

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">文化传承</h1>
            <p className="text-xl text-white/80">探索苗绣千年文化，感受非遗魅力</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full mb-6">
                <History className="w-5 h-5" />
                <span className="font-medium">历史渊源</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">苗绣的千年传承</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  苗族刺绣历史悠久，最早可以追溯到汉代。据史料记载，苗族先民在迁徙过程中，将刺绣技艺带到了今天的贵州、湖南、云南等地。
                </p>
                <p>
                  苗绣不仅是一种装饰艺术，更是苗族文化的重要载体。每一幅苗绣作品都蕴含着苗族人民对自然、生命、爱情的理解和向往。
                </p>
                <p>
                  2006年，苗族刺绣被列入第一批国家级非物质文化遗产名录，成为中华民族珍贵的文化瑰宝。
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://neeko-copilot.bytedance.net/api/text2image?prompt=ancient%20miao%20embroidery%20historical%20artifact%20traditional%20chinese%20culture%20museum&image_size=portrait_4_3"
                alt="苗绣历史"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl font-bold">2000+</div>
                <div className="text-sm opacity-80">年历史传承</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-accent-100 text-accent-600 px-4 py-2 rounded-full mb-6">
              <Palette className="w-5 h-5" />
              <span className="font-medium">刺绣技法</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">六大传统技法</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-600">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{technique.name}</h3>
                <p className="text-gray-600">{technique.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">纹样寓意</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">图案中的文化密码</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {patterns.map((pattern, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-primary-50 transition-colors">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{pattern.name}</h3>
                <p className="text-sm text-gray-500">{pattern.meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
              <Video className="w-5 h-5" />
              <span className="font-medium">视频教程</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">学习苗绣技艺</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative aspect-video bg-gray-200">
                  <img
                    src={`https://neeko-copilot.bytedance.net/api/text2image?prompt=miao%20embroidery%20tutorial%20video%20thumbnail%20traditional%20craft&image_size=landscape_4_3`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Play className="w-8 h-8 text-primary-600 ml-1" />
                    </button>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">加入非遗传承计划</h3>
          <p className="mb-6">学习苗绣技艺，成为非遗传承的一份子</p>
          <button onClick={() => onNavigate('contact')} className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            立即报名
          </button>
        </div>
      </section>
    </div>
  )
}

export default Culture
