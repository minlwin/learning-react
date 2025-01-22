import RoundedIconLink from "@/components/ui/rounded-icon-button"
import TopPage from "@/components/ui/top-page"
import { BiGift } from "react-icons/bi"
import { PiList } from "react-icons/pi"

export default function ProductDetails() {
    return (
      <TopPage icon={<BiGift />} title="Product Details" 
            action={
            <RoundedIconLink href="/">
                <PiList />
            </RoundedIconLink> } >
        <></>
      </TopPage>
    )
}