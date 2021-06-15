package dimigo.MemberControl;

import dimigo.MemberControl.repository.MemberRepository;
import dimigo.MemberControl.service.MemberService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfigure {

   // private DataSource dataSource;
   // private EntityManager em;

//    @Autowired
//    public SpringConfigure(DataSource dataSource, EntityManager em) {
//        this.dataSource = dataSource;
//        this.em = em;
//    }


    private MemberRepository memberRepository;

    public SpringConfigure(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    @Bean
    public MemberService memberService() {
        return new MemberService(memberRepository);
    }


//    @Bean
//    public MemberRepository memberRepository() {
//
//        //return new MemoryMemberRepository();
//       // return new JPAMemberRepository(em);
//    }

}
