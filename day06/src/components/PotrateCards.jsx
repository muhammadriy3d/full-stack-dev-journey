const PCard = ({ link, cardClass, title, imgSrc }) => {
  return (
    <a className={`overflow-hidden w-[261px] h-[350px] hover:shadow-2xl rounded-md flex flex-col transition-all ease-linear select-none hover:border ${cardClass} mt-4 lg:mr-4`} href={link}>
      <h4 className="font-extrabold text-3xl p-6 text-ellipsis ">{title}</h4>
      <img loading="lazy" alt="pic" src={imgSrc} />
    </a>
  );
}

export default PCard;
