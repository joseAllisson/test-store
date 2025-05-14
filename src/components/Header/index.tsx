export function Header() {
    return (
        <header className="bg-gradient-to-r from-primary to-secondary text-white shadow-lg">
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-between">
                    <div className="w-full pr-4 flex items-center justify-between space-x-4">
                        <h1 className="text-2xl font-bold">Teste</h1>
                        <nav className="hidden md:flex space-x-6">
                            <a href="#" className="hover:text-primary-light transition-colors">Início</a>
                            <a href="#" className="hover:text-primary-light transition-colors">Produtos</a>
                            <a href="#" className="hover:text-primary-light transition-colors">Sobre</a>
                            <a href="#" className="hover:text-primary-light transition-colors">Contato</a>
                        </nav>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="hover:text-primary-light transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}