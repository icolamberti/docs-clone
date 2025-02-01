import InputError from '@/Components/InputError'
import { Button } from '@/Components/Ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/Components/Ui/card'
import { Input } from '@/Components/Ui/input'
import { Label } from '@/Components/Ui/label'
import GuestLayout from '@/Layouts/GuestLayout'
import { Link, useForm } from '@inertiajs/react'
import { FormEventHandler } from 'react'

export default function () {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  })

  const submit: FormEventHandler = e => {
    e.preventDefault()

    post('', {
      onFinish: () => reset('password', 'password_confirmation'),
    })
  }

  return (
    <GuestLayout>
      <Card className='h-full w-full p-8'>
        <CardHeader className='px-0 pt-0'>
          <CardTitle>Register</CardTitle>

          <CardDescription>Use your email to continue</CardDescription>
        </CardHeader>

        <CardContent className='space-y-5 px-0 pb-0'>
          <form onSubmit={submit} className='flex flex-col gap-y-2.5'>
            <div>
              <Label htmlFor='name'>Full name</Label>

              <Input
                id='name'
                disabled={processing}
                value={data.name}
                onChange={event => setData('name', event.target.value)}
                required
              />

              <InputError message={errors.name} />
            </div>

            <div>
              <Label htmlFor='email'>Email</Label>

              <Input
                id='email'
                disabled={processing}
                value={data.email}
                onChange={event => setData('email', event.target.value)}
                type='email'
                required
              />

              <InputError message={errors.email} />
            </div>

            <div>
              <Label htmlFor='password'>Password</Label>

              <Input
                id='password'
                disabled={processing}
                type='password'
                value={data.password}
                onChange={event => setData('password', event.target.value)}
                required
              />

              <InputError message={errors.password} />
            </div>

            <div>
              <Label htmlFor='password_confirmation'>Confirm password</Label>

              <Input
                id='password_confirmation'
                disabled={processing}
                type='password'
                value={data.password_confirmation}
                onChange={event =>
                  setData('password_confirmation', event.target.value)
                }
                required
              />

              <InputError message={errors.password_confirmation} />
            </div>

            <Button
              isLoading={processing}
              type='submit'
              className='mt-5 w-full'
              size={'lg'}
            >
              Continue
            </Button>
          </form>

          <p className='text-center text-xs text-muted-foreground'>
            Already have an account?{' '}
            <Link href='login' className='text-sky-700 hover:underline'>
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </GuestLayout>
  )
}
