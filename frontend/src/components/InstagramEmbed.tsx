import { useEffect } from "react"

interface Props {
  url: string
}

export default function InstagramEmbed({ url }: Props) {

  const cleanUrl = url.split("?")[0]

  useEffect(() => {

    const scriptId = "instagram-embed-script"

    if (!document.getElementById(scriptId)) {

      const script = document.createElement("script")
      script.id = scriptId
      script.src = "https://www.instagram.com/embed.js"
      script.async = true

      script.onload = () => {
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process()
        }
      }

      document.body.appendChild(script)

    } else {

      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process()
      }

    }

  }, [cleanUrl])

  return (

    <div className="my-10 flex justify-center">

      <blockquote
        className="instagram-media"
        data-instgrm-permalink={cleanUrl}
        data-instgrm-version="14"
        style={{ maxWidth: "540px", width: "100%" }}
      />

    </div>

  )
}