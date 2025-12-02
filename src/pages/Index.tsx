import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Постельное белье с рюшами',
    category: 'Спальня',
    price: '12 900 ₽',
    image: 'https://cdn.poehali.dev/projects/6c2703bc-d6cf-454f-aea0-863e674381b8/files/ccd73b31-c2b8-49aa-b93e-392210300e4b.jpg',
    description: 'Роскошное постельное белье из натурального хлопка с нежными рюшами'
  },
  {
    id: 2,
    name: 'Скатерть с ланчматами',
    category: 'Столовая',
    price: '8 500 ₽',
    image: 'https://cdn.poehali.dev/projects/6c2703bc-d6cf-454f-aea0-863e674381b8/files/cc6a8064-bad8-42d8-93d9-c8d975243762.jpg',
    description: 'Элегантный комплект для сервировки в стиле прованс'
  },
  {
    id: 3,
    name: 'Занавески с рюшами',
    category: 'Интерьер',
    price: '15 900 ₽',
    image: 'https://cdn.poehali.dev/projects/6c2703bc-d6cf-454f-aea0-863e674381b8/files/beb37469-f3d0-411b-9e56-0b93e9f474b1.jpg',
    description: 'Воздушные занавески создадут атмосферу французской деревни'
  },
  {
    id: 4,
    name: 'Скатерть с оборками (красная полоска)',
    category: 'Столовая',
    price: '6 900 ₽',
    image: 'https://cdn.poehali.dev/files/0a37fd19-f1ca-4f59-bd1b-222ff6a2dcf6.png',
    description: 'Уютная скатерть из натурального льна с изящными оборками'
  },
  {
    id: 5,
    name: 'Скатерть в клетку (зеленая)',
    category: 'Столовая',
    price: '7 200 ₽',
    image: 'https://cdn.poehali.dev/files/7a271095-9ee3-49a7-92ce-521f4d51197b.png',
    description: 'Элегантная скатерть в традиционную клетку с рюшами'
  },
  {
    id: 6,
    name: 'Ланчматы с оборками (полоска)',
    category: 'Столовая',
    price: '3 500 ₽',
    image: 'https://cdn.poehali.dev/files/4bc95413-6cb2-44bc-8686-f3c14332589c.png',
    description: 'Набор из 4 ланчматов с нежными оборками'
  },
  {
    id: 7,
    name: 'Домашняя пижама (белая)',
    category: 'Для дома',
    price: '8 900 ₽',
    image: 'https://cdn.poehali.dev/files/acfc3e2b-3c9a-4d8c-bf0a-71c0d2aadbb6.png',
    description: 'Роскошная пижама из воздушного льна с длинным халатом'
  },
  {
    id: 8,
    name: 'Домашнее платье (бежевое)',
    category: 'Для дома',
    price: '7 500 ₽',
    image: 'https://cdn.poehali.dev/files/c9240dc7-a20e-4232-a49b-38ed7de0d403.png',
    description: 'Свободное платье из натурального льна с ярусами'
  },
];

const Index = () => {
  const [cartCount, setCartCount] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <div 
        className="fixed inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/a1e6c752-1b55-4bf8-b516-741bdcbc5aae.jpg)',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      <div className="relative z-10">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <img 
                src="https://cdn.poehali.dev/files/a1e6c752-1b55-4bf8-b516-741bdcbc5aae.jpg" 
                alt="Jane home" 
                className="h-16 w-auto"
              />
              <nav className="hidden md:flex gap-6">
                <button
                  onClick={() => setActiveSection('home')}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === 'home' ? 'text-primary' : 'text-foreground/60'
                  }`}
                >
                  Главная
                </button>
                <button
                  onClick={() => setActiveSection('collections')}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === 'collections' ? 'text-primary' : 'text-foreground/60'
                  }`}
                >
                  Коллекции
                </button>
                <button
                  onClick={() => setActiveSection('about')}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === 'about' ? 'text-primary' : 'text-foreground/60'
                  }`}
                >
                  О бренде
                </button>
                <button
                  onClick={() => setActiveSection('contacts')}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === 'contacts' ? 'text-primary' : 'text-foreground/60'
                  }`}
                >
                  Контакты
                </button>
              </nav>
            </div>
            <Button variant="outline" className="relative">
              <Icon name="ShoppingBag" size={20} />
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {cartCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </header>

      <main>
        {activeSection === 'home' && (
          <>
            <section className="relative py-20 md:py-32 overflow-hidden">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                  <div className="flex justify-center mb-12 animate-in fade-in zoom-in duration-1000">
                    <div className="relative w-full max-w-md aspect-[9/16] rounded-lg overflow-hidden shadow-2xl">
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/kChSFX0a9co?autoplay=1&mute=1&loop=1&playlist=kChSFX0a9co"
                        title="Jane home"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-primary leading-tight">
                    Уютный текстиль<br />для вашего дома
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    Коллекции постельного белья, занавесок и столового текстиля<br />
                    в стиле прованс и шебби-шик
                  </p>
                  <Button
                    size="lg"
                    className="mt-8"
                    onClick={() => setActiveSection('collections')}
                  >
                    Смотреть коллекции
                  </Button>
                </div>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/20 to-transparent" />
            </section>



            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h3 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                    Наши коллекции
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    Каждое изделие создано с любовью и вниманием к деталям
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {products.map((product) => (
                    <Card
                      key={product.id}
                      className="group overflow-hidden transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardContent className="p-6 space-y-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary">{product.category}</Badge>
                          <span className="text-lg font-semibold text-primary">
                            {product.price}
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold">{product.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {product.description}
                        </p>
                        <Button
                          className="w-full mt-4"
                          onClick={addToCart}
                        >
                          <Icon name="ShoppingCart" size={18} className="mr-2" />
                          В корзину
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            <section className="py-16 md:py-24 bg-accent/30">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="space-y-3">
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Sparkles" size={32} className="text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold">Ручная работа</h4>
                      <p className="text-muted-foreground">
                        Каждое изделие создаётся с любовью и вниманием к мельчайшим деталям
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Heart" size={32} className="text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold">Натуральные ткани</h4>
                      <p className="text-muted-foreground">
                        Используем только качественный хлопок и лён для вашего комфорта
                      </p>
                    </div>
                    <div className="space-y-3">
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Home" size={32} className="text-primary" />
                      </div>
                      <h4 className="text-xl font-semibold">Уютная атмосфера</h4>
                      <p className="text-muted-foreground">
                        Создаём текстиль, который превращает дом в настоящее гнёздышко
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {activeSection === 'about' && (
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto space-y-8">
                <div className="flex justify-center mb-8 animate-in fade-in zoom-in duration-1000">
                  <img 
                    src="https://cdn.poehali.dev/files/a1e6c752-1b55-4bf8-b516-741bdcbc5aae.jpg" 
                    alt="Jane home" 
                    className="h-48 md:h-64 lg:h-80 w-auto shadow-2xl rounded-lg"
                  />
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-primary text-center">
                  О бренде Jane home
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Jane home — это воплощение французской элегантности и домашнего уюта. 
                    Мы создаём текстильные изделия, которые превращают обычный дом в место, 
                    куда хочется возвращаться снова и снова.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Наша философия основана на любви к деталям, качественным натуральным 
                    материалам и неповторимому стилю прованс. Каждое изделие — это маленький 
                    шедевр, созданный с заботой о вашем комфорте.
                  </p>
                  <div className="mt-12 grid md:grid-cols-2 gap-8">
                    <Card className="p-6">
                      <h3 className="text-2xl font-semibold mb-4">Наша миссия</h3>
                      <p className="text-muted-foreground">
                        Создавать текстиль, который дарит радость и превращает каждый день 
                        в маленький праздник уюта и красоты.
                      </p>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-2xl font-semibold mb-4">Наши ценности</h3>
                      <p className="text-muted-foreground">
                        Качество, внимание к деталям, экологичность и любовь к 
                        классическим французским традициям.
                      </p>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'contacts' && (
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <div className="flex justify-center mb-8 animate-in fade-in zoom-in duration-1000">
                  <img 
                    src="https://cdn.poehali.dev/files/a1e6c752-1b55-4bf8-b516-741bdcbc5aae.jpg" 
                    alt="Jane home" 
                    className="h-40 md:h-48 lg:h-56 w-auto shadow-2xl rounded-lg"
                  />
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-primary text-center mb-12">
                  Контакты
                </h2>
                <Card className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Icon name="Mail" size={24} className="text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-muted-foreground">hello@janehome.ru</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="Phone" size={24} className="text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Телефон</h4>
                        <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Icon name="MapPin" size={24} className="text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Адрес шоурума</h4>
                        <p className="text-muted-foreground">
                          г. Москва, ул. Арбат, д. 10<br />
                          Пн-Вс: 10:00 — 20:00
                        </p>
                      </div>
                    </div>
                    <div className="pt-6 border-t">
                      <h4 className="font-semibold mb-4">Мы в соцсетях</h4>
                      <div className="flex gap-4">
                        <Button variant="outline" size="icon">
                          <Icon name="Instagram" size={20} />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Icon name="Facebook" size={20} />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Icon name="Send" size={20} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'collections' && (
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">
                  Все коллекции
                </h2>
                <p className="text-muted-foreground text-lg">
                  Выберите категорию текстиля для вашего дома
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {['Спальня', 'Столовая', 'Интерьер', 'Все'].map((category) => (
                  <Button key={category} variant="outline" className="h-12">
                    {category}
                  </Button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {products.map((product) => (
                  <Card
                    key={product.id}
                    className="group overflow-hidden transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary">{product.category}</Badge>
                        <span className="text-lg font-semibold text-primary">
                          {product.price}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold">{product.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {product.description}
                      </p>
                      <Button
                        className="w-full mt-4"
                        onClick={addToCart}
                      >
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        В корзину
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-accent/30 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://cdn.poehali.dev/files/a1e6c752-1b55-4bf8-b516-741bdcbc5aae.jpg" 
                alt="Jane home" 
                className="h-16 w-auto mb-4"
              />
              <p className="text-sm text-muted-foreground">
                Текстиль для дома в стиле прованс и шебби-шик
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Доставка и оплата</li>
                <li>Возврат товара</li>
                <li>Гарантии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Контакты</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>hello@janehome.ru</li>
                <li>г. Москва, ул. Арбат, д. 10</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 Jane home. Все права защищены.
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default Index;