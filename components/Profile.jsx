import Image from 'next/image'

export default function Profile() {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/images/profile-image.jpg"
        alt="Maxime Boly"
        width={200}
        height={200}
        className="rounded-full"
        priority
      />
    </div>
  )
}