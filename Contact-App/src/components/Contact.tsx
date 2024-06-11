import ContactIcon from '../assets/contact.icon.svg'
import EditIcon from '../assets/edit.icon.svg'
import DeleteIcon from '../assets/delete.icon.svg'

function Contact() {
  return (
    <div className="px-4 py-3 rounded-2xl bg-card flex gap-3 justify-between items-center">
        <img className="w-[45px]" src={ContactIcon} alt="" />
        <div>
            <div className="text-start text-[16px] font-bold">Shoaib hassan</div>
            <p className="text-[14px]">shoaibhassanwani@gmail.com</p>
        </div>
        <div className="flex gap-5">
            <button><img src={EditIcon} alt="" /></button>
            <button><img src={DeleteIcon} alt="" /></button>
        </div>
    </div>
  )
}

export default Contact