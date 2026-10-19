import { useEffect, useRef, useState } from 'react'
import type { Shot } from './content'

interface Labels {
  label: string
  close: string
  prev: string
  next: string
}

export default function Gallery({ shots, labels }: { shots: Shot[]; labels: Labels }) {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const dialog = useRef<HTMLDialogElement>(null)
  const shot = shots[index]

  const go = (delta: number) => setIndex((i) => (i + delta + shots.length) % shots.length)

  useEffect(() => {
    const el = dialog.current
    if (!el) return
    if (open && !el.open) el.showModal()
    if (!open && el.open) el.close()
  }, [open])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') go(1)
    if (e.key === 'ArrowLeft') go(-1)
  }

  return (
    <div className="gallery" role="group" aria-label={labels.label} onKeyDown={onKeyDown}>
      <button type="button" className="gallery-main" onClick={() => setOpen(true)} aria-label={`${shot.caption}`}>
        <img src={shot.src} alt={shot.caption} width={shot.w} height={shot.h} loading="lazy" />
      </button>
      <p className="gallery-caption" aria-live="polite">
        {shot.caption}
      </p>
      <ul className="gallery-thumbs">
        {shots.map((s, i) => (
          <li key={s.src}>
            <button type="button" aria-label={s.caption} aria-current={i === index ? 'true' : undefined} onClick={() => setIndex(i)}>
              <img src={s.src} alt="" width={s.w} height={s.h} loading="lazy" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className="lightbox"
        aria-label={shot.caption}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false)
        }}
        onKeyDown={onKeyDown}
      >
        <div className="lightbox-stage">
          <button type="button" className="lb-btn lb-prev" onClick={() => go(-1)} aria-label={labels.prev}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M12 4l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <img src={shot.src} alt={shot.caption} />
          <button type="button" className="lb-btn lb-next" onClick={() => go(1)} aria-label={labels.next}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M8 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <button type="button" className="lb-btn lb-close" onClick={() => setOpen(false)} aria-label={labels.close}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <p className="lightbox-caption">
          <span className="count">
            {index + 1} / {shots.length}
          </span>
          {shot.caption}
        </p>
      </dialog>
    </div>
  )
}
