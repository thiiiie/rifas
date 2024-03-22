interface ListProps {
  step: number
  description: string
}

interface PixListProps {
  onCopy?: () => void
  code?: string
  showCode?: boolean
  list?: string[]
}

const ListItem = ({ step, description }: ListProps) => {
  return (
    <li className="flex items-start gap-2">
      <button className="text-center w-[20px] h-[20px] bg-green-700 text-white rounded text-sm">{step}</button>
      <p className="text-sm flex-1">{description}</p>
    </li>
  )
}


export const PixList = ({ onCopy, code, list, showCode = true }: PixListProps) => {
  if (list) {
    return (
      <ul className="p-4 flex flex-col gap-2">
        {list.map((item, index) => (
          <ListItem
            key={index}
            step={index + 1}
            description={item}
          />
        ))}
      </ul>
    )
  }

  return (
    <ul className="p-4 flex flex-col gap-2">
      <ListItem
        step={1}
        description="Copie a chave PIX abaixo."
      />
      {showCode && (
        <div className="flex items-center h-10 w-full">
          <div className="flex w-full p-2 border rounded-s border-slate-200 h-full">
            <p className="text-clip overflow-hidden max-w-[150px] md-phone:max-w-[180px] lg-phone:max-w-[230px] xl-phone:max-w-[350px]">{code}</p>
          </div>

          <button onClick={onCopy} className="flex items-center justify-center bg-green-700 text-white rounded-r h-[100%] text-sm px-5 font-bold">Copiar</button>
        </div>
      )}

      <ListItem
        step={2}
        description="Abra o app do seu banco e escolha a opção PIX, como se fosse fazer uma transferência."
      />

      <ListItem
        step={3}
        description="Selecione a opção PIX cópia e cola, cole a chave copiada e confirme o pagamento."
      />
    </ul>
  )
}
