interface OfferProps {
    title: string,
    description: string,
    rp: string
}

export default function OfferInfo(props: OfferProps) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="font-bold text-heading text-gray1">{props.title}</h4>
      <p className="text-base text-gray2">{props.description}</p>
      <p className="text-xl text-gray1 font-600">{props.rp}</p>
    </div>
  );
}