import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold">Turn conversations into revenue</h3>
        <p className="text-purple-100 mt-3 max-w-2xl mx-auto">Start with contacts and deals today. Add voice agents and automations as you grow.</p>
        <div className="mt-8">
          <a href="#demo" className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition">
            Get started <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
