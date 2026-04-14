import { useEffect } from "react"

interface Props {
  url: string
}

export default function InstagramEmbed({ url }: Props) {
  useEffect(() => {
    if ((window as any).instgrm) {
      ;(window as any).instgrm.Embeds.process()
    }
  }, [url])

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{ width: "100%", margin: "0 auto" }}
    />
  )
}