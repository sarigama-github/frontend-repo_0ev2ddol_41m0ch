import { useEffect, useState } from 'react'
import { Loader2, Mic, Sparkles } from 'lucide-react'

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Demo() {
  const [input, setInput] = useState('Had a great first call. They asked about pricing and want a pilot next month. Some concerns around integration timeline.')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const runInsights = async () => {
    setLoading(true)
    setResult(null)
    try {
      const res = await fetch(`${BASE_URL}/api/ai/insights`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: input })
      })
      const data = await res.json()
      setResult(data)
    } catch (e) {
      setResult({ error: e.message })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // run once on mount for a quick demo experience
    runInsights()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Try AI insights</h3>
            <p className="text-gray-600 mt-2">Paste a call note or email and get instant summary, sentiment, and suggested next steps.</p>
            <div className="mt-4">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                rows={8}
                className="w-full rounded-xl border border-gray-200 p-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Paste your conversation transcript..."
              />
              <div className="mt-3 flex gap-3">
                <button onClick={runInsights} className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg font-semibold">
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />} Generate
                </button>
                <button disabled className="inline-flex items-center gap-2 bg-gray-100 text-gray-500 px-4 py-2.5 rounded-lg">
                  <Mic className="w-4 h-4" /> Voice (soon)
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm min-h-[280px]">
            {!result && (
              <div className="text-gray-500">Enter some text and hit Generate to see insights.</div>
            )}
            {result && result.error && (
              <div className="text-red-600">{result.error}</div>
            )}
            {result && !result.error && (
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Summary</h4>
                  <p className="mt-1 text-gray-900">{result.summary}</p>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="p-3 rounded-lg bg-purple-50 border border-purple-100">
                    <p className="text-xs text-purple-700">Sentiment</p>
                    <p className="font-semibold capitalize">{result.sentiment}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-blue-50 border border-blue-100">
                    <p className="text-xs text-blue-700">Confidence</p>
                    <p className="font-semibold">{Math.round((result.confidence || 0)*100)}%</p>
                  </div>
                  <div className="p-3 rounded-lg bg-amber-50 border border-amber-100">
                    <p className="text-xs text-amber-700">Items</p>
                    <p className="font-semibold">{result.action_items?.length || 0}</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider">Suggested next steps</h4>
                  <ul className="mt-2 space-y-2 list-disc list-inside text-gray-900">
                    {result.action_items?.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
