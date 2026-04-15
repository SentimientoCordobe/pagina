import { useEffect } from "react"

interface Props {
  url: string
}

export default function InstagramEmbed({ url }: Props) {

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

  }, [url])

  return (
    <div className="my-8 flex justify-center">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{ maxWidth: "540px", width: "100%" }}
      />
    </div>
  )
}