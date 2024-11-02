import '@/styles/loader.css';
import LogotypeMin from "@/components/ui/logotype-min.tsx";

const PageLoader = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
          <div className='animate-logo-loader'>
            <LogotypeMin/>
          </div>
        </div>
    );
};

export default PageLoader;