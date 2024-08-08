export default function Card({ headingText, children }){
  return (
    <>
      <div className="m-8 py-5 px-8 bg-white rounded-lg flex flex-col">
        <h1 className="text-3xl font-bold pb-5">{headingText}</h1>
        <div className="grow min-h-full">
          {children}
        </div>
      </div>
    </>
  )
}