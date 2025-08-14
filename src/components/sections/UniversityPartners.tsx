import { useState, useMemo } from 'react';

const universityImages = [
  // ... (your original universityImages array remains unchanged)
  { url: '/assets/about/university_logos/AU_University_Horizontal_COLOR_RGB.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/Arcadia-logo-color.jpg', discipline: 'Communications And Design', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/CWRU_University_Formal_No_Tag_RGB_Blue.jpg', discipline: 'Counseling', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/columbia_logo_1.png', discipline: 'Business', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/ECON_logo.jpg', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/Emerson-College-Logo.png', discipline: 'Communications And Design', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/FOR-MSW_UniversityLogo_Short_RedBlack_RGB.png', discipline: 'Counseling', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/GWU-MPH_Horizontal-School_2cs_pos.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/GU-MSN_University_Stacked_blue_rgb.png', discipline: 'Counseling', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/Harvard-University-Main-Logo.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/HOWARD_CLOCKTOWER_LOGO_HORIZONTAL_1.jpg', discipline: 'Counseling', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/IMD-Horizontal_Lockup-Blue_on_White-0-RGB.jpg', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/LSE-Economics-Political-Science-Logo_SNWKidB.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/MVU-UMT_logo-university_core_horiz_rgb_color.png', discipline: 'Business', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/MIT-Logo-Color.svg', discipline: 'Business', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/MHC_CUPOLA_HORZ_1C_1.png', discipline: 'Counseling', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/NUS_Computing__logo_APPROVED.jpg', discipline: 'Business', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/NYU-Steinhardt-Logo.png', discipline: 'Communications And Design', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/NU-MAC_SchoolFormalLockup_Horizontal_Purple_PMS.png', discipline: 'Communications And Design', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/pepperdine_master_logo_2024_gDqt8LF.png', discipline: 'Counseling', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/Rice_logo_hi_res.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/RIT_1505C_hor_k.jpg', discipline: 'Communications And Design', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/SDA_logo_Pant.png', discipline: 'Communications And Design', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/Simmons-university-logo.png', discipline: 'Counseling', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/SMU_University_NoTagline_RGB_COLOR_01.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/SJF-UMT_logo-university_stacked-left_rgb_color.png', discipline: 'Business', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/SCHE-stacked-logo.png', discipline: 'Business', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/SYRACUSE_Horizontal_1Line_ORANGE_RGB.png', discipline: 'Communications And Design', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/Tecnologico_de_Monterrey_LockUp_horizontal_RGB.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/birm_logo.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/UCB_University_RGB_COLOR.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/ucdavis_logo_cmyk_blue.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/Cambridge.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/UCT_Horizontal_logo.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/University_of_Dayton_Logo_UPDATED.jpg', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/UniversityOfDenver-Signature_01.png', discipline: 'Counseling', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/1_Colour_Logo_Black_Text_RGB.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/miami_bootcamps_logo_1.png', discipline: 'Business', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/UNC_logo_webblue-e1517942350314.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/OXF_i592xu5.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/USC_Formal_RGB.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/USB-Business-Logo.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/sydney_logo.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/logo-UTexas-Austin_-_Jackie_Silva_1.png', discipline: 'Business', offering: 'Boot Camps' },
  { url: '/assets/about/university_logos/VU_University_Horizontal_RGB_COLOR.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/Official_WUSTL-2line-PMS-pos.png', discipline: 'Business', offering: 'Certificate Program' },
  { url: '/assets/about/university_logos/Yaleblue.png', discipline: 'Business', offering: 'Certificate Program' },
];

const UniversityPartners = () => {
  const [selectedDiscipline, setSelectedDiscipline] = useState('');
  const [selectedOffering, setSelectedOffering] = useState('');
  
  // Removed expansion logic: always show all filtered universities

  const disciplines = useMemo(() => {
    return [...new Set(universityImages.map(item => item.discipline))];
  }, []);

  const offerings = useMemo(() => {
    return [...new Set(universityImages.map(item => item.offering))];
  }, []);

  const filteredUniversities = useMemo(() => {
    return universityImages.filter(item => {
      const matchesDiscipline = !selectedDiscipline || item.discipline === selectedDiscipline;
      const matchesOffering = !selectedOffering || item.offering === selectedOffering;
      return matchesDiscipline && matchesOffering;
    });
  }, [selectedDiscipline, selectedOffering]);

  const clearFilters = () => {
    setSelectedDiscipline('');
    setSelectedOffering('');
  };

  // All visible universities (no slicing on mobile now)
  const visibleUniversities = filteredUniversities;


  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      {/* Header Section */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-gray-700 text-center">
          University Partners
        </h2>
        
        {/* Mobile Filter Section */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          {/* Discipline Filter */}
          <select
            value={selectedDiscipline}
            onChange={(e) => setSelectedDiscipline(e.target.value)}
            className="w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white sm:min-w-48"
          >
            <option value="">All Disciplines</option>
            {disciplines.map(discipline => (
              <option key={discipline} value={discipline}>
                {discipline}
              </option>
            ))}
          </select>

          {/* Offering Filter */}
          <select
            value={selectedOffering}
            onChange={(e) => setSelectedOffering(e.target.value)}
            className="w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white sm:min-w-48"
          >
            <option value="">All Offerings</option>
            {offerings.map(offering => (
              <option key={offering} value={offering}>
                {offering}
              </option>
            ))}
          </select>

          {/* Clear Filters Button */}
          {(selectedDiscipline || selectedOffering) && (
            <button
              onClick={clearFilters}
              className="w-full sm:w-auto px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-orange-500 text-white rounded-lg hover:bg-orange-600 active:bg-orange-700 transition-colors duration-200 font-medium"
            >
              Clear Filters
            </button>
          )}
        </div>

        {/* Results Counter */}
        <div className="text-center text-sm sm:text-base text-gray-600 mb-4">
          Showing {filteredUniversities.length} of {universityImages.length} partners
        </div>
      </div>

      {/* University logos container: horizontal scroll on mobile, full grid on desktop */}
      <div className="pb-4 md:pb-0">
        <div
          className="flex md:grid gap-3 sm:gap-4 lg:gap-5 hide-scrollbar overflow-x-auto md:overflow-visible md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {visibleUniversities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 group relative flex-shrink-0 w-40 sm:w-44 md:w-auto scroll-snap-align-start"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="aspect-[3/2] bg-gray-50 flex items-center justify-center p-3 sm:p-4 group-hover:bg-gray-100 transition-colors duration-300">
                <img
                  src={item.url}
                  alt={`University Logo ${index + 1}`}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2Y0ZjRmNCIvPjx0ZXh0IHg9IjEwMCIgeT0iNTUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgZmlsbD0iIzk5OTk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TG9nbyBub3QgZm91bmQ8L3RleHQ+PC9zdmc+';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
  {/* Removed View All / Show Less controls (all visible now) */}

      {/* No Results Message */}
      {filteredUniversities.length === 0 && (
        <div className="text-center py-8 sm:py-12 px-4">
          <div className="text-gray-400 mb-4">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-base sm:text-lg font-medium text-gray-600 mb-2">No partners found</h3>
          <p className="text-sm sm:text-base text-gray-500 mb-4 max-w-md mx-auto">
            No universities match your current filter criteria. Try adjusting your filters to see more results.
          </p>
          <button
            onClick={clearFilters}
            className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-orange-500 text-white rounded-lg hover:bg-orange-600 active:bg-orange-700 transition-colors duration-200 font-medium"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default UniversityPartners;