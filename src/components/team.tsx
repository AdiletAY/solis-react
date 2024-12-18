import styles from '@/styles/styles.module.css';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useTranslation } from 'react-i18next';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import {useEffect, useState} from "react";
import getTeam from "@/shared/api/requests/get-team.ts";
import {getStaticImage} from "@/lib/helpers/get-static-img.ts";
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog.tsx";

type TeamType = {
  id: number,
  cityName_en: string,
  cityName_kk: string,
  cityName_ru: string,
  team: {
    about: string,
    id: 1,
    fullName_en: string
    fullName_ru: string
    fullName_kk: string
    position_en: string
    position_ru: string
    position_kk: string
    avatar: string
  }[]
}



const Team = () => {
    const {  t, i18n } = useTranslation();
    const [team, setTeam] = useState<TeamType[]>([]);
    useEffect(() => {
        (async () => {
          const teamRes = await getTeam();
            setTeam(teamRes)
        })()
    }, []);

    return (
        <section className={`${styles.teamBlock} ${styles.container}`} id="team">
            <h2 className={`${styles.title} ${styles.titleUnderline}`}>{t('pages.home.team')}</h2>

            <Tabs defaultValue={team[0]?.cityName_en || 'Astana'} className="w-full flex flex-col justify-center">
                <TabsList className="grid w-full md:w-1/3 h-auto grid-cols-2 m-auto rounded">
                  {team?.map((item) => (
                    <TabsTrigger key={item.id} className='rounded p-3 text-base uppercase font-semibold' value={item?.cityName_en}>
                      {//@ts-ignore
                        item[`cityName_${i18n.language}`]
                      }
                    </TabsTrigger>
                  ))}
                </TabsList>
              {
                team?.map((branch) => (
                    <TabsContent key={branch.id} value={branch.cityName_en}>
                      <Carousel className="w-9/12 m-auto">
                        <CarouselContent>
                          {branch?.team?.map((member) => (
                              <CarouselItem key={member.id} className="md:basis-1/2 lg:basis-1/3">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <div className='cursor-pointer'>
                                      <img
                                          className={styles.teammateImg}
                                          src={getStaticImage(member.avatar)}
                                          alt={
                                            //@ts-ignore
                                              member[`position_${i18n.language}`]
                                              + " " +
                                              //@ts-ignore
                                              member[`fullName_${i18n.language}`]
                                          }
                                      />

                                      <div className={styles.teammateInfo}>
                                        <h4 className={styles.teammateName}>
                                          {//@ts-ignore
                                            member[`fullName_${i18n.language}`]
                                          }
                                        </h4>
                                        <h5 className={styles.teammatePosition}>
                                          {//@ts-ignore
                                            member[`position_${i18n.language}`]
                                          }
                                        </h5>
                                      </div>
                                    </div>
                                  </DialogTrigger>
                                  <DialogContent>
                                    <DialogHeader>
                                      <DialogTitle>
                                        {
                                          //@ts-ignore
                                          member[`fullName_${i18n.language}`]
                                        }</DialogTitle>
                                      <DialogDescription>
                                        {//@ts-ignore
                                          member[`position_${i18n.language}`]
                                        }
                                      </DialogDescription>
                                    </DialogHeader>
                                    <p className='news-detail__intro' dangerouslySetInnerHTML={{__html: member.about}}/>
                                  </DialogContent>
                                </Dialog>
                              </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious/>
                        <CarouselNext/>
                      </Carousel>
                    </TabsContent>
                ))
              }
            </Tabs>
        </section>
    )
}

export default Team