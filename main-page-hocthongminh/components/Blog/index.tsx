import styles from './blog.module.scss'
import Image from 'next/image'
import Blog1 from '../../public/Con-lac-don-la-gi.png'
export default function Blog() {
  return (
    <div className={styles.knowledgeView}>
        <div className={styles.titleKnowledge}>Kiến thức hay</div>
        <div className={styles.blockKnowledge}>
          <div className={styles.itemKnowledgePanel}>
            <a href="#">
              <div className={styles.itemKnowledge}>
                <div className={styles.imageKnowledge}>
                  <Image src={Blog1}  alt="lop6" width={0} height={0}  style={{ width: '100%', height:'150px'}}/>

                </div>
                <div className={styles.infoKnowledge}>
                  <div className={styles.nameKnowledge}>
                  Thì tương lai hoàn thành tiếp diễn – Cách dùng, cấu trúc và bài tập củng cố kiến thức
                  </div>
                  <div className={styles.desKnowledge}>
                  Thì tương lai hoàn thành tiếp diễn được sử dụng khi muốn nhấn mạnh một hành động nào đó trong tương lai. Thì này ít dùng trong văn nói nhưng trong văn viết thì rất nhiều. Các dạng bài tập thường xuyên xuất hiện, nhất là chia động từ trong các kỳ thi tiếng Anh. …
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.itemKnowledgePanel}>
            <a href="#">
              <div className={styles.itemKnowledge}>
                <div className={styles.imageKnowledge}>
                  <Image src={Blog1}  alt="lop6" width={0} height={0}  style={{ width: '100%', height:'150px'}}/>

                </div>
                <div className={styles.infoKnowledge}>
                  <div className={styles.nameKnowledge}>
                  Thì tương lai hoàn thành tiếp diễn – Cách dùng, cấu trúc và bài tập củng cố kiến thức
                  </div>
                  <div className={styles.desKnowledge}>
                  Thì tương lai hoàn thành tiếp diễn được sử dụng khi muốn nhấn mạnh một hành động nào đó trong tương lai. Thì này ít dùng trong văn nói nhưng trong văn viết thì rất nhiều. Các dạng bài tập thường xuyên xuất hiện, nhất là chia động từ trong các kỳ thi tiếng Anh. …
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.itemKnowledgePanel}>
            <a href="#">
              <div className={styles.itemKnowledge}>
                <div className={styles.imageKnowledge}>
                  <Image src={Blog1}  alt="lop6" width={0} height={0}  style={{ width: '100%', height:'150px'}}/>

                </div>
                <div className={styles.infoKnowledge}>
                  <div className={styles.nameKnowledge}>
                  Thì tương lai hoàn thành tiếp diễn – Cách dùng, cấu trúc và bài tập củng cố kiến thức
                  </div>
                  <div className={styles.desKnowledge}>
                  Thì tương lai hoàn thành tiếp diễn được sử dụng khi muốn nhấn mạnh một hành động nào đó trong tương lai. Thì này ít dùng trong văn nói nhưng trong văn viết thì rất nhiều. Các dạng bài tập thường xuyên xuất hiện, nhất là chia động từ trong các kỳ thi tiếng Anh. …
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className={styles.itemKnowledgePanel}>
            <a href="#">
              <div className={styles.itemKnowledge}>
                <div className={styles.imageKnowledge}>
                  <Image src={Blog1}  alt="lop6" width={0} height={0}  style={{ width: '100%', height:'150px'}}/>

                </div>
                <div className={styles.infoKnowledge}>
                  <div className={styles.nameKnowledge}>
                  Thì tương lai hoàn thành tiếp diễn – Cách dùng, cấu trúc và bài tập củng cố kiến thức
                  </div>
                  <div className={styles.desKnowledge}>
                  Thì tương lai hoàn thành tiếp diễn được sử dụng khi muốn nhấn mạnh một hành động nào đó trong tương lai. Thì này ít dùng trong văn nói nhưng trong văn viết thì rất nhiều. Các dạng bài tập thường xuyên xuất hiện, nhất là chia động từ trong các kỳ thi tiếng Anh. …
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
    </div>
  )
}
