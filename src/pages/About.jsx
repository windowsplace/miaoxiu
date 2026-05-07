import { History, Users, Award, Target } from 'lucide-react'

const About = ({ onNavigate }) => {
  const milestones = [
    { year: '2018', title: '公司成立', description: '苗绣竹韵正式成立，致力于苗绣文化传承' },
    { year: '2019', title: '非遗认证', description: '获得国家级非物质文化遗产保护单位认证' },
    { year: '2020', title: '乡村合作', description: '与50个苗族村寨建立合作关系' },
    { year: '2021', title: '电商拓展', description: '入驻各大电商平台，产品远销海内外' },
    { year: '2022', title: '技艺培训', description: '开展苗绣技艺培训，培养新一代传承人' },
    { year: '2023', title: '品牌升级', description: '完成品牌升级，推出全新产品线' },
  ]

  const team = [
    { name: '王绣娘', role: '首席非遗传承人', experience: '30年苗绣经验' },
    { name: '李老师', role: '工艺总监', experience: '15年传统工艺研究' },
    { name: '张经理', role: '运营总监', experience: '10年电商运营经验' },
  ]

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">关于我们</h1>
            <p className="text-xl text-white/80">
              苗绣竹韵致力于传承和推广苗族刺绣文化，通过传统手工艺助力乡村振兴事业
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">我们的故事</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  苗绣竹韵诞生于贵州黔东南的苗族村寨，这里是苗族刺绣文化的发源地。我们的创始人王绣娘，自幼跟随祖母学习苗绣技艺，深知这门传统工艺的珍贵价值。
                </p>
                <p>
                  2018年，王绣娘联合几位志同道合的传承人，创立了苗绣竹韵。我们的使命是让更多人了解和喜爱苗绣文化，同时通过产业化发展，帮助乡村绣娘实现增收致富。
                </p>
                <p>
                  多年来，我们坚持传统手工制作，每一件产品都凝聚着匠人的心血。我们与500多位绣娘建立了长期合作，覆盖贵州、湖南、云南等多个苗族聚居地。
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://neeko-copilot.bytedance.net/api/text2image?prompt=elderly%20chinese%20miao%20woman%20doing%20traditional%20embroidery%20craftwork%20cultural%20heritage&image_size=portrait_4_3"
                alt="苗绣传承"
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent-500 text-white p-4 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-80">合作绣娘</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">发展历程</h2>
            <p className="text-gray-600">从传承到创新，我们一直在路上</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className={`inline-block bg-white rounded-xl p-6 shadow-sm ${index % 2 === 0 ? 'ml-auto' : ''}`}>
                      <div className="text-primary-600 font-bold text-lg mb-2">{milestone.year}</div>
                      <div className="text-gray-900 font-semibold mb-1">{milestone.title}</div>
                      <div className="text-gray-500 text-sm">{milestone.description}</div>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow"></div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">核心团队</h2>
            <p className="text-gray-600">专业团队，守护非遗传承</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-primary-600 font-medium mb-2">{member.role}</div>
                <div className="text-gray-500 text-sm">{member.experience}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">我们的使命与愿景</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">使命</h3>
              <p className="text-gray-600">
                传承苗族刺绣文化，保护非物质文化遗产，通过产业化发展助力乡村振兴，让传统手工艺在现代社会焕发新生。
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-16 h-16 bg-accent-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">愿景</h3>
              <p className="text-gray-600">
                成为中国最具影响力的非遗文化品牌，让苗绣技艺走向世界，为乡村振兴贡献力量，实现文化传承与经济发展的双赢。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
