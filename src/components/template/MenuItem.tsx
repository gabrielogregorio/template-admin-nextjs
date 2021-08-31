import Link from 'next/link'

interface MenuItemProps {
  url?: string
  text: string
  icone: any 
  onClick?: (event: any) => void
  classData?:string
}

export default function MenuItem(props: MenuItemProps) {

  function renderContent() {
    return (
      <a className={`flex flex-col justify-center items-center h-20 w-full dark:text-gray-200 `}>
        {props.icone}
        <span className={`text-s font-regular `}>
          {props.text}
        </span>
      </a>
    )
  }

  return (
    <li onClick={props.onClick} className={`
        p-2
        cursor-pointer
        text-gray-600
        hover:bg-gray-300
        dark:hover:bg-gray-800

        ${props.classData}

 
        `}>
      {props.url ? (
        <Link href={props.url}>
          {renderContent()}
        </Link>
      ) : (
        renderContent()
      )}
    </li>
  )

}