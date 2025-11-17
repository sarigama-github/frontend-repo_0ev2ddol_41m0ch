import { Brain, PhoneCall, CalendarCheck2, Database, Shield, Workflow } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI insights',
    desc: 'Summaries, sentiment, and action items after every interaction.'
  },
  {
    icon: PhoneCall,
    title: 'Voice ready',
    desc: 'Designed for voice agents and call workflows out of the box.'
  },
  {
    icon: CalendarCheck2,
    title: 'Pipeline automation',
    desc: 'Auto‑create tasks, schedule follow‑ups, and move deals by rules.'
  },
  {
    icon: Database,
    title: 'MongoDB persistence',
    desc: 'Your data is stored and queryable with flexible schemas.'
  },
  {
    icon: Shield,
    title: 'Role based access',
    desc: 'Granular permissions for teams and partners.'
  },
  {
    icon: Workflow,
    title: 'Open APIs',
    desc: 'Simple endpoints to connect websites, bots, and tools.'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">Everything you need to sell faster</h2>
        <p className="text-gray-600 text-center mt-3 max-w-2xl mx-auto">Modern CRM essentials with AI superpowers. No bloat, just the flows that matter.</p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="p-6 rounded-xl border border-gray-200 hover:border-gray-300 transition bg-white/60">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
