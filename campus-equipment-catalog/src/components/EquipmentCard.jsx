import { Link } from "react-router-dom";

export default function EquipmentCard({ item }) {
  return (
    <article className="equipment-card">
      <div className="card-top">
        <span className="badge">{item.category}</span>
        <span className={`status ${item.available ? "available" : "muted"}`}>
          {item.available ? "Available" : "In use"}
        </span>
      </div>
      <h2>{item.name}</h2>
      <dl>
        <div>
          <dt>Location</dt>
          <dd>{item.location}</dd>
        </div>
        <div>
          <dt>Condition</dt>
          <dd>{item.condition}</dd>
        </div>
      </dl>
      <Link className="text-link" to={`/equipment/${item.id}`}>
        View details
      </Link>
    </article>
  );
}
