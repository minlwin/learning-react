'use client'

import NoData from "@/components/ui/no-data";
import RoundedIconLink from "@/components/ui/rounded-icon-button";
import TopPage from "@/components/ui/top-page";
import { useProductStore } from "@/stores/product-store";
import { Table } from "flowbite-react";
import Link from "next/link";
import { PiArrowRight, PiList, PiPlus } from "react-icons/pi";

export default function Home() {

  const { products } = useProductStore()

  return (
    <TopPage action={
      <RoundedIconLink href="/edit">
        <PiPlus />
      </RoundedIconLink>
    } icon={<PiList />} title="Product List">
      {products.length == 0 
        ? <NoData />
        : (
          <Table>
            <Table.Head>
              <Table.HeadCell>Id</Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Head>

            <Table.Body>
              {products.map(item => (
                <Table.Row key={item.id}>
                  <Table.Cell>{item.id}</Table.Cell>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>{item.category}</Table.Cell>
                  <Table.Cell>{item.price}</Table.Cell>
                  <Table.Cell>
                    <Link href={`/details/${item.id}`}>
                      <PiArrowRight />
                    </Link>
                  </Table.Cell>
                </Table.Row>                
              ))}
            </Table.Body>
          </Table>
        )
      }
    </TopPage>
  )
}
