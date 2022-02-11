import { useProvider } from "@/utils/provider"

export default function Home() {
  const {theme} = useProvider()
  return (
    <div>
      {theme}
    </div>
  )
}
