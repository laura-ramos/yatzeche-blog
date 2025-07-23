export default function Footer() {
  return (
        <footer className="bg-accent text-white">
        <div className="container mx-auto px-2">
            <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                    <h3 className="text-xl font-semibold">Santa Inés Yatzeche</h3>
                </div>
                <p className="text-gray-300 mb-4">Preservando nuestras tradiciones para las futuras generaciones</p>
                <div className="w-16 h-1 bg-gradient-to-r from-warning to-orange mx-auto"></div>
            </div>
        </div>
    </footer>
  );
}