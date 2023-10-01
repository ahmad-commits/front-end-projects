import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';

export default function Sign() {
  return (
    <Card className='bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500'>
      <form className="rounded-none flex flex-col gap-4 m-64 ">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value="Your email"
            />
          </div>
          <TextInput
            id="email1"
            placeholder="johndoe@example.com"
            required
            type="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Your password"
            />
          </div>
          <TextInput
            id="password1"
            required
            type="password"
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">
            Remember me
          </Label>
        </div>
        <Button type="submit">
          Submit
        </Button>
      </form>
    </Card>
  )
}


