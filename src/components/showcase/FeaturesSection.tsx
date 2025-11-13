import { PhoneMockup } from "./PhoneMockup";
import { ScreenCard } from "./ScreenCard";
import { IconRow } from "./ui/IconRow";
import { SearchBar } from "./ui/SearchBar";
import { PillBadge } from "./ui/PillBadge";
import { ActionButton } from "./ui/ActionButton";
import { ImageCard } from "./ui/ImageCard";
import { Plane, Hotel, Car, Ticket, Utensils, MapPin, ArrowRight, Calendar, DollarSign } from "lucide-react";

export const FeaturesSection = () => {
  return (
    <section className="py-20 bg-app-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Key Features
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Everything you need for your perfect journey
          </p>
        </div>

        {/* Phone Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Phone 1 - Search Screen */}
          <PhoneMockup size="large" delay={0}>
            <div className="p-6 space-y-6 h-full flex flex-col">
              <IconRow icons={[Plane, Hotel, Car, Ticket, Utensils]} size={20} spacing="gap-4" />
              <div className="flex-1 flex flex-col justify-center space-y-4">
                <SearchBar placeholder="Where to?" />
                <div className="flex gap-2 justify-center">
                  <PillBadge text="Paris" icon={MapPin} />
                  <PillBadge text="$599" icon={DollarSign} variant="accent" />
                </div>
                <button className="w-full h-12 rounded-full bg-white text-app-blue font-semibold">
                  Search Flights
                </button>
              </div>
            </div>
          </PhoneMockup>

          {/* Phone 2 - Card List */}
          <PhoneMockup size="large" delay={0.1}>
            <div className="p-4 space-y-4">
              <div className="flex justify-between items-center text-white px-2">
                <h3 className="font-bold text-lg">Popular</h3>
                <button className="text-sm">Filter</button>
              </div>
              <ScreenCard>
                <ImageCard
                  image="https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
                  alt="Paris"
                  badges={["Featured"]}
                  className="mb-3"
                />
                <div className="space-y-2">
                  <h4 className="text-white font-semibold">Paris Getaway</h4>
                  <p className="text-white/60 text-sm">7 days • $1,299</p>
                  <button className="w-full h-10 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors">
                    View Details
                  </button>
                </div>
              </ScreenCard>
            </div>
          </PhoneMockup>

          {/* Phone 3 - Detail Screen */}
          <PhoneMockup size="medium" delay={0.2}>
            <div className="p-4 space-y-4">
              <div className="flex justify-between items-center text-white">
                <span className="text-2xl font-bold">✈️</span>
                <button>⋮</button>
              </div>
              <div className="text-white space-y-2">
                <h2 className="text-2xl font-bold">Explore</h2>
                <p className="text-white/60 text-sm">Discover amazing places</p>
              </div>
              <ScreenCard className="aspect-[4/3]">
                <div className="h-full bg-gradient-to-br from-app-light-blue/20 to-app-blue/20 rounded-lg flex items-center justify-center">
                  <span className="text-4xl">🏖️</span>
                </div>
              </ScreenCard>
            </div>
          </PhoneMockup>

          {/* Phone 4 - Booking Form */}
          <PhoneMockup size="medium" delay={0.3}>
            <div className="p-4 space-y-4">
              <IconRow icons={[Plane, Car, Hotel]} size={18} spacing="gap-6" />
              <div className="text-white space-y-3">
                <h3 className="font-bold text-lg">Book Your Trip</h3>
                <div className="space-y-2">
                  <div className="h-10 bg-white/10 rounded-lg flex items-center px-3">
                    <Calendar size={16} className="text-white/50 mr-2" />
                    <span className="text-sm text-white/70">Select dates</span>
                  </div>
                  <div className="h-10 bg-white/10 rounded-lg flex items-center px-3">
                    <MapPin size={16} className="text-white/50 mr-2" />
                    <span className="text-sm text-white/70">Destination</span>
                  </div>
                  <button className="w-full h-10 rounded-full bg-white text-app-blue font-semibold text-sm">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </PhoneMockup>

          {/* Phone 5 - Stats */}
          <PhoneMockup size="large" delay={0.4}>
            <div className="p-6 space-y-6">
              <div className="text-white">
                <h3 className="font-bold text-xl mb-4">Your Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <ScreenCard className="p-4 text-center">
                    <div className="text-3xl font-bold text-white mb-1">12</div>
                    <div className="text-xs text-white/60">Trips</div>
                  </ScreenCard>
                  <ScreenCard className="p-4 text-center">
                    <div className="text-3xl font-bold text-white mb-1">24</div>
                    <div className="text-xs text-white/60">Cities</div>
                  </ScreenCard>
                  <ScreenCard className="p-4 text-center">
                    <div className="text-3xl font-bold text-white mb-1">8</div>
                    <div className="text-xs text-white/60">Countries</div>
                  </ScreenCard>
                  <ScreenCard className="p-4 text-center">
                    <div className="text-3xl font-bold text-white mb-1">156</div>
                    <div className="text-xs text-white/60">Photos</div>
                  </ScreenCard>
                </div>
              </div>
            </div>
          </PhoneMockup>

          {/* Phone 6 - Profile */}
          <PhoneMockup size="medium" delay={0.5}>
            <div className="p-4 space-y-4">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-app-light-blue to-app-blue mx-auto flex items-center justify-center text-2xl">
                  👤
                </div>
                <div className="text-white">
                  <h4 className="font-semibold">Travel Explorer</h4>
                  <p className="text-xs text-white/60">Member since 2024</p>
                </div>
              </div>
              <div className="space-y-2">
                {['My Trips', 'Favorites', 'Settings'].map((item, i) => (
                  <div
                    key={i}
                    className="h-10 bg-white/10 rounded-lg flex items-center justify-between px-3 text-white text-sm"
                  >
                    <span>{item}</span>
                    <ArrowRight size={16} />
                  </div>
                ))}
              </div>
            </div>
          </PhoneMockup>
        </div>
      </div>
    </section>
  );
};
