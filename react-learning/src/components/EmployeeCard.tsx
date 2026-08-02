type EmployeeCardProps = {
    name: string;
    role: string;
    company: string;
    experience: number;
};
function EmployeeCard({ name, role, company, experience }: EmployeeCardProps) {
    return (
        <div className="employee-card">
            <h2>{name}</h2>
            <p>Role: {role}</p>
            <p>Company: {company}</p>
            <p>Experience: {experience} years</p>
        </div>
    );
}
export default EmployeeCard;