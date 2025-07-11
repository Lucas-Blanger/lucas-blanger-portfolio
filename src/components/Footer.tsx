export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4">
      <p>
        © {new Date().getFullYear()} Lucas Blanger. Todos os direitos
        reservados.
      </p>
    </footer>
  );
}
