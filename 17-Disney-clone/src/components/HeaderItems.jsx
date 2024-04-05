

export default function HeaderItems({name, Icon}) {
  return (
    <button className="flex items-center gap-2 text-white hover:underline underline-offset-8">
      <Icon />
      <p className="">{name}</p>
    </button>
  )
}
