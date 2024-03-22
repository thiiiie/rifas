interface SelectButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string
  popular?: boolean
}


export const SelectButton = ({ value, popular = false, ...rest }: SelectButtonProps) => {
  return (
    <button 
      type="button"
      data-popular={popular} 
      className="relative hover:opacity-80 transition-opacity flex flex-col items-center justify-center gap-2 text-center text-2xl md-phone:text-3xl font-black bg-selectButton-background text-selectButton-foreground p-4 rounded-xl data-[popular=true]:bg-selectButton-popular data-[popular=true]:border-green-700 data-[popular=true]:border-2"
      {...rest}
    >
      {popular && (
        <p className="px-3 py-1 font-medium rounded-b-lg absolute text-center leading-3 top-0 bg-green-700 text-[0.6rem] max-w-[60px] md-phone:max-w-[80px]">MAIS POPULAR</p>
      )}
      <span data-popular={popular} className="data-[popular=true]:mt-6 flex">+ {value}</span>
      <span className="font-normal text-xs md-phone:text-sm uppercase">Selecionar</span>
    </button>
  )
}
