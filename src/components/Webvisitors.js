export default function Webvisitors(){
    const visitorArray = [
        {name: "Angela B.", age: 45, email: "abhudson@yamomma.com" },
        {name: "Marcus A.", age: 26, email: "mca1997@yamammy.com" },
        {name: "Alphonso R", age: 35, email: "alphieralphy@yamomma.com"},
        {name: "James O.", age: 29, email: "jmacknolack@gooftroop.com" },
        {name: "Tina S.", age: 27, email: "tina.snow504@yamammy.com" },
      ]
    
      let visitors = visitorArray.map((visitor, idx) => {
        return (
          <div key={idx} className="vis-cont">
            <h4 className="name">{visitor.name}</h4>
            <h6 className="age">{visitor.age}</h6>
            <h6 className="email">{visitor.email}</h6>
         </div>
      )})
    return(
        <div className="Webvisitors">
          <h5>WebSite Visitors</h5>
          <h2>821</h2>
          <div className="visitors-container">{visitors}</div>
        </div>
    )
}