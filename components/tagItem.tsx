export default function TagItem({tag}:{tag:string}){
  return(
    <p className="py-1 px-2 rounded-sm text-(--color-dev-gray700) bg-(--color-dev-gray100) font-medium">{tag}</p>
  )
}