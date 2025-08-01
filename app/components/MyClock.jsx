
export default function MyClock() {

    let date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;


  return (
    <div>
      <div className="flex gap-3 text-[12px] sm:text-sm ">
          {year}/{month}/{day}
      </div>
    </div>
  )
}