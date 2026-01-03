import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/folderGrid.scss"

interface FolderCard {
  name: string
  path: string
  description?: string
  emoji?: string
}

export interface Options {
  folders: FolderCard[]
}

const defaultOptions: Options = {
  folders: [],
}

export default ((userOpts?: Partial<Options>) => {
  const opts: Options = { ...defaultOptions, ...userOpts }

  const FolderGrid: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    // Only show on the homepage
    if (fileData.slug !== "index") {
      return null
    }

    return (
      <div class={`folder-grid ${displayClass ?? ""}`}>
        {opts.folders.map((folder) => (
          <a href={folder.path} class="folder-card">
            {folder.emoji && <div class="folder-emoji">{folder.emoji}</div>}
            <h3 class="folder-name">{folder.name}</h3>
            {folder.description && <p class="folder-description">{folder.description}</p>}
          </a>
        ))}
      </div>
    )
  }

  FolderGrid.css = style
  return FolderGrid
}) satisfies QuartzComponentConstructor
