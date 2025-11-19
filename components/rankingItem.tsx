import StackItem from "./stackItem";
import TagItem from "./tagItem";

export default function RankingItem(){
  return(
    <div className="py-3 px-6 bg-white rounded-lg">
      <div>
        <p>rank</p>
        <img src="" alt="" />
      </div>
      <div>
        <div>
          <p>title</p>
          <p>content</p>
        </div>
        <div className="flex gap-6">
          <StackItem subject="누적" number={120}/>
          <StackItem subject="일 평균" number={2}/> 
          <StackItem subject="경력" number={2}/> 
        </div>
        <div className="flex gap-2">
          <TagItem tag="태그1"/>
          <TagItem tag="태그2"/>
          <TagItem tag="태그3"/>
        </div>
      </div>
    </div>
  )
}