import { products_list } from "@/app/mock/products";
import Image from "next/image";

export default async function Detail({ params }: { params: { id: string } }) {
  const { id } = await params
  const product = products_list.find((p) => p.id === parseInt(id));
  if (!product) {
    return <div>Produto não encontrado</div>;
  }
  return (
    <div className='bg-[#262626] min-h-screen'>
      {/* <Header /> */}
      <div className='container flex mt-12'>
        <Image
          width={500}
          height={500}
          className='w-full max-w-sm'
          src={product?.image}
          alt={product?.name}
        />
        <div className='mt-12'>
          <h1 className='text-2xl font-semibold text-gray-100'>
            {product?.name}
          </h1>
          <p className='text-gray-200'>{product?.description}</p>
        </div>
      </div>
    </div>
  );
}
