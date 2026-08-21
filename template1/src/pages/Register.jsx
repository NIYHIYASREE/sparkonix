import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams } from 'react-router-dom'
import Button from '../components/common/Button.jsx'
import { getEventById, submitRegistration } from '../services/api.js'

const registrationSchema = z.object({
  name: z.string().min(3, 'Enter a valid name'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(10, 'Enter a valid phone'),
  college: z.string().min(3, 'Enter your college'),
  department: z.string().min(2, 'Enter your department'),
  teamName: z.string().optional()
})

function Register() {
  const { eventId } = useParams()
  const [event, setEvent] = useState(null)
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      college: '',
      department: '',
      teamName: ''
    }
  })

  useEffect(() => {
    async function loadEvent() {
      if (eventId) {
        const data = await getEventById(eventId)
        setEvent(data)
      }
    }
    loadEvent()
  }, [eventId])

  const onSubmit = async (values) => {
    await submitRegistration({ eventId, ...values })
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section className="px-6 pt-28 pb-20 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-slate-800/80 bg-slate-950/90 p-10 text-center shadow-glow">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Registration complete</p>
          <h1 className="mt-5 text-4xl font-semibold text-slate-100">You’re all set.</h1>
          <p className="mt-4 text-slate-400">Your registration request has been received and will be confirmed by the NEXTRON team.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="px-6 pt-28 pb-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Register</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-100">{event ? `Register for ${event.name}` : 'Event registration'}</h1>
          <p className="mt-3 text-slate-400">Fill in your details to secure your spot. The form will stay saved as you progress through the steps.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.5fr]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                Participant name
                <input className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-electric/70" {...register('name')} />
                {errors.name && <p className="text-xs text-gold">{errors.name.message}</p>}
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                Email address
                <input className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-electric/70" {...register('email')} />
                {errors.email && <p className="text-xs text-gold">{errors.email.message}</p>}
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                Phone number
                <input className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-electric/70" {...register('phone')} />
                {errors.phone && <p className="text-xs text-gold">{errors.phone.message}</p>}
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                College / Institution
                <input className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-electric/70" {...register('college')} />
                {errors.college && <p className="text-xs text-gold">{errors.college.message}</p>}
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-slate-200">
                Department
                <input className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-electric/70" {...register('department')} />
                {errors.department && <p className="text-xs text-gold">{errors.department.message}</p>}
              </label>
              <label className="space-y-2 text-sm text-slate-200">
                Team name (optional)
                <input className="w-full rounded-3xl border border-slate-800 bg-slate-900 px-4 py-3 text-slate-100 outline-none transition focus:border-electric/70" {...register('teamName')} />
              </label>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-slate-400">Step {step} of 2</div>
              <div className="flex gap-3">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep((current) => current - 1)}
                    className="rounded-full border border-slate-700 px-5 py-3 text-sm text-slate-300 hover:border-slate-500"
                  >
                    Previous
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setStep((current) => Math.min(current + 1, 2))}
                  className="rounded-full bg-slate-800 px-5 py-3 text-sm text-slate-100 hover:bg-slate-700"
                >
                  Continue
                </button>
              </div>
            </div>

            {step === 2 && (
              <div className="rounded-3xl bg-slate-900/80 p-6 text-slate-300">
                <h2 className="mb-4 text-xl font-semibold text-slate-100">Review your submission</h2>
                <p className="text-sm leading-6">Please verify your details before submitting. This is a mock registration flow that will eventually post to the backend.</p>
              </div>
            )}

            {step === 2 && (
              <div className="flex justify-end">
                <Button type="submit" variant="primary" className="py-3 px-8">
                  Submit registration
                </Button>
              </div>
            )}
          </form>

          <aside className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Need help?</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-100">Registration info</h2>
            <p className="mt-4 text-slate-400">Complete the form to reserve your spot. Team events require at least one additional member.</p>
            <div className="mt-6 space-y-4 rounded-3xl bg-slate-900/80 p-5">
              <p className="text-sm text-slate-400">If you need changes after submission, contact NEXTRON coordinators via email.</p>
              <p className="text-sm text-slate-400">All registrations are subject to final confirmation.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Register
