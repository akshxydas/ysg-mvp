# YouShouldGo - Nearby Places Discovery App

A Next.js web application that helps users discover nearby places to visit when they have free time. Find temples, viewpoints, hiking trails, beaches, and other attractions based on your current location.

## 🌟 Features

- **Location-Based Discovery**: Find places near your current location using GPS
- **Distance Calculation**: Uses Haversine formula for accurate distance calculations
- **Search & Filter**: Search by keywords or filter by place type
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **Terms & Conditions**: Required acceptance before using the app
- **Privacy-Focused**: Location data processed locally, not stored on servers

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd youshouldgo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
youshouldgo/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── search/            # Search page
│   ├── about/             # About page
│   └── terms/             # Terms page
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   ├── TermsModal.tsx     # Terms acceptance modal
│   ├── LocationPermission.tsx # Location handling
│   └── PlaceCard.tsx      # Place display card
├── data/                  # Data files
│   └── places.json        # Places database
├── utils/                 # Utility functions
│   └── distance.ts        # Distance calculations
└── public/               # Static assets
```

## 📊 Data Structure

The app uses a JSON file (`data/places.json`) with the following structure:

```json
{
  "id": 1,
  "name": "Place Name",
  "type": "viewpoint|temple|hiking|beach|church",
  "description": "Description of the place",
  "latitude": 35.3606,
  "longitude": 138.7274,
  "best_time": "Early morning for sunrise views",
  "rating": 5,
  "image_url": "https://example.com/image.jpg",
  "address": "Full address"
}
```

### Adding New Places

To add new places to the database:

1. Open `data/places.json`
2. Add a new object with the required fields
3. Ensure the `id` is unique
4. Provide accurate coordinates (latitude/longitude)
5. Add a descriptive image URL (optional)

## 🛠️ Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library
- **Haversine Formula** - Distance calculations between coordinates

## 📱 Features in Detail

### 1. Landing Page with Terms & Conditions
- Users must accept terms before using the app
- Important disclaimers about data accuracy
- Local storage to remember acceptance

### 2. Location-Based Discovery
- Requests user permission for geolocation
- Calculates distances using Haversine formula
- Sorts places by proximity to user

### 3. Search & Filter
- Search by place name, description, or type
- Filter by category (temples, viewpoints, hiking, etc.)
- Real-time filtering and search results

### 4. Place Cards
- Displays place information in attractive cards
- Shows distance, rating, best time to visit
- Includes images and addresses when available

### 5. Responsive Design
- Works on mobile and desktop
- Modern, clean UI with Tailwind CSS
- Accessible and user-friendly

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for any environment-specific configuration:

```env
NEXT_PUBLIC_APP_NAME=YouShouldGo
NEXT_PUBLIC_APP_DESCRIPTION=Discover nearby places
```

### Customization

- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Data**: Update `data/places.json` to add your own places
- **Styling**: Customize components in the `components/` directory

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on push

### Other Platforms

The app can be deployed to any platform that supports Next.js:

```bash
npm run build
npm start
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## ⚠️ Important Notes

- **Data Accuracy**: The app uses local JSON data which may not always be accurate
- **Location Privacy**: Location data is processed locally and not stored
- **User Responsibility**: Users should verify information before visiting places
- **Browser Compatibility**: Requires modern browsers with geolocation support

## 🐛 Troubleshooting

### Common Issues

1. **Location not working**
   - Ensure HTTPS is enabled (required for geolocation)
   - Check browser permissions
   - Try refreshing the page

2. **Places not loading**
   - Check the `data/places.json` file
   - Verify the JSON structure is correct
   - Check browser console for errors

3. **Build errors**
   - Ensure all dependencies are installed
   - Check TypeScript configuration
   - Verify Next.js version compatibility

## 📞 Support

For support or questions:
- Check the documentation
- Review the code comments
- Open an issue on GitHub

---

**Built with ❤️ using Next.js and Tailwind CSS** 