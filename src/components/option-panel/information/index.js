import Input from './Input'

function Information() {
  return (
    <>
      <Input
        name="balju"
        placeholder="발주사"
      />
      <Input
        name="sigong"
        placeholder="시공사"
      />
      <Input
        name="name"
        placeholder="현장명"
      />
      <Input
        name="address"
        placeholder="주소"
      />
    </>
  )
}

export default Information