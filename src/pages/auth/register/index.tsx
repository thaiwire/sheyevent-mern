import WelcomContent from "../common/welcome-content";

function RegisterPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <WelcomContent />
      <div>Form Content</div>
    </div>
  );
}

export default RegisterPage;
