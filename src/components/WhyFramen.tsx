@@ .. @@
 const WhyFramen = () => {
+  const [hoveredFeature, setHoveredFeature] = React.useState<number | null>(null);
+
   const features = [
     {
       icon: Target,
@@ .. @@
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {features.map((feature, index) => (
-            <div key={index} className="space-y-4">
-              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
+            <div 
+              key={index} 
+              className="space-y-4 transform transition-all duration-300 hover:scale-105 cursor-pointer"
+              onMouseEnter={() => setHoveredFeature(index)}
+              onMouseLeave={() => setHoveredFeature(null)}
+            >
+              <div className={`w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center transition-all duration-300 ${hoveredFeature === index ? 'bg-opacity-30 scale-110' : ''}`}>
                 <feature.icon className="h-6 w-6 text-white" />
               </div>
               
-              <h3 className="text-xl font-semibold text-white">
+              <h3 className={`text-xl font-semibold text-white transition-all duration-300 ${hoveredFeature === index ? 'text-yellow-200' : ''}`}>
                 {feature.title}
               </h3>
               
-              <p className="text-indigo-100 leading-relaxed">
+              <p className={`text-indigo-100 leading-relaxed transition-all duration-300 ${hoveredFeature === index ? 'text-white' : ''}`}>
                 {feature.description}
               </p>
             </div>