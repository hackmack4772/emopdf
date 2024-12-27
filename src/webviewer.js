import { useEffect, useRef } from 'react';
import ComPDFKitViewer from '@compdfkit_pdf_sdk/webviewer';

export default function WebViewer() {
  const containerRef = useRef(null);

  useEffect(() => {
    let docViewer = null;

    ComPDFKitViewer.init({
      path: '/',
      pdfUrl: 'https://onesourcedoc.s3.eu-west-1.amazonaws.com/aland/pdf/Aland_Islands_2024_26th_Thursday_Showreel_For_participants.pdf',
      license: 'Njc2ZTQ4YzVkOTk5OA=='
    }, containerRef.current).then((instance) => {
      docViewer = instance.docViewer;
      docViewer.addEvent('documentloaded', async () => {
        console.log('ComPDFKit Web Demo loaded');
      })
    })
  }, []);
  
  return <div ref={containerRef} style={{ width: "100%", height: "100vh", overflow: "hidden" }} />
}